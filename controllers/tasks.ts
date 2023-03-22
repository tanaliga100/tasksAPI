import express, { Express, Request, Response } from "express";
import ITask from "../interfaces/tasks.model";
import Task from "../models/task.schema";

const getAllTasks = async (req: Request, res: Response) => {
  try {
    const allTasks = await Task.find({});
    res
      .status(200)
      .json({ status: "All Tasks", length: allTasks.length, allTasks });
  } catch (error) {}
};

const createTask = async (req: Request, res: Response) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error: unknown) {
    res.status(500).json({ msg: error });
  }
};

const getTask = async (req: Request, res: Response) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({ msg: "NO Task with id " + taskId });
    }

    res.status(200).json({ msg: "Single Task", task });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

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
