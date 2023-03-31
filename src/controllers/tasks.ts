import { NextFunction, Request, Response } from "express";
import CustomAPIError from "../errors/customErrorClass";
import ITask from "../interfaces/tasks.model";
import { asyncMiddleware, catchAsync } from "../middlewares/asyncMiddleware";
import Task from "../models/task.schema";

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ status: "All Tasks", length: tasks.length, tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

// const createTask = async (req: Request, res: Response) => {
//   try {
//     const task = await Task.create(req.body);
//     res.status(201).json(task);
//   } catch (error) {
//     res.status(500).json({ msg: error });
//   }
// };
const createTask = catchAsync(async (req: Request, res: Response) => {
  const task = await Task.create(req.body);
  res.status(201).json(task);
});

// const getTask = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     const { id: taskId } = req.params;
//     const task = await Task.findOne({ _id: taskId });
//     if (!task) {
//       return res
//         .status(404)
//         .json({ msg: `No such task found ${taskId}`, status: 404 });
//     }
//     return res.status(200).json({ msg: "Single Task", task });
//   } catch (error) {
//     return next(error);
//   }
// };

const getTask = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      const error = new CustomAPIError(404, `Task ${taskId} not found`);
      return next(error);
    }
    return res.status(200).json({ msg: "Single Task", task });
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
