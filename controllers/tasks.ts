import express, {
  ErrorRequestHandler,
  Express,
  NextFunction,
  Request,
  Response,
} from "express";
import ITask from "../interfaces/tasks.model";
// import HTTPError from "../middlewares/errorHandler";
import CustomAPIError from "../errors/customError";
import asyncMiddleware from "../middlewares/asyncMiddleware";
import Task from "../models/task.schema";

const getAllTasks = asyncMiddleware(
  async (req: Request, res: Response): Promise<void> => {
    const tasks = await Task.find({});
    res.status(200).json({ status: "All Tasks", length: tasks.length, tasks });
  }
);

const createTask = asyncMiddleware(async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

const getTask = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      let error = new CustomAPIError(
        404,
        "No associated task with id :" + taskId
      );
      return next(error);
      // return next(new CustomAPIError(404, "No associated task " + taskId));
    }
    res.status(200).json({ msg: "Single Task", task });
  }
);

const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: "No Task with ID: " + taskId });
    }
    const newTask = await Task.find({});
    res.status(200).json({ msg: "Task Deleted successfully", newTask });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};
const updateTask = async (req: Request, res: Response) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      return res.status(404).json({ msg: "No Task with ID: " + taskId });
    }
    res.status(200).json({ msg: "Task Updated", task });
  } catch (error: unknown) {
    res.status(404).json({ msg: error });
  }
};
export { createTask, deleteTask, getAllTasks, getTask, updateTask };

let Tasks: ITask[] = [];

// this will trigger an error if exact length but not exact value
// return res.status(500).json({ msg: "Exact Id but not exact value" });
// return next(createCustomError("Exact Id but not exact value", 404));
// return next("has error");
