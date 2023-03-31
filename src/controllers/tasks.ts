import { NextFunction, Request, Response } from "express";
import BadRequestError from "../errors/badRequest-error";
import NotFoundError from "../errors/notFound-error";
import { asyncMiddleware } from "../middlewares/asyncMiddleware";
import Task from "../models/task.schema";

const ALL_TASKS = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    const tasks = await Task.find({});
    if (!tasks) {
      throw new NotFoundError("No tasks found...Please create one", 404);
    }
    return res
      .status(200)
      .json({ msg: "ALL_TASKS", length: tasks.length, tasks });
  }
);

const CREATE_TASK = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title } = req.body;
    if (!title) {
      throw new BadRequestError("No task provided...Please create one", 404);
    }
    const task = await Task.create(req.body);
    res.status(201).json({ msg: "TASK_CREATED", task });
  }
);

const GET_TASK = asyncMiddleware(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    return res.status(200).json({ msg: "Single Task", task });
  }
);
const DELETE_TASK = asyncMiddleware(async (req: Request, res: Response) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return res.status(404).json({ msg: "No Task with ID: " + taskId });
  }
  const newTask = await Task.find({});
  res.status(200).json({ msg: "Task Deleted successfully", newTask });
});
const UPDATE_TASK = asyncMiddleware(async (req: Request, res: Response) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: "No Task with ID: " + taskId });
  }
  res.status(200).json({ msg: "Task Updated", task });
});
export { ALL_TASKS, CREATE_TASK, DELETE_TASK, GET_TASK, UPDATE_TASK };
