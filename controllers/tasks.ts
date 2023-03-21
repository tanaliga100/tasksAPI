import express, { Express, Request, Response } from "express";
import ITask from "../models/tasks.mode";

let Tasks: ITask[] = [];

const getAllTasks = async (req: Request, res: Response) => {
  res.json(Tasks);
};

const createTask = async (req: Request, res: Response) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res
      .status(400)
      .json({ msg: "Title and description must be provided" });
  } else {
    let newTask: ITask = {
      id: String(Math.floor(Math.random() * 20 + 100)),
      title,
      description,
      completed: false,
    };
    Tasks.push(newTask);
  }
  res.status(200).json({ msg: "TASK CREATED", Tasks: Tasks });
};

const getTask = async (req: Request, res: Response) => {
  const { id: taskId } = req.params;
  const task = await Tasks.find((task) => task.id === taskId);
  if (!taskId) {
    return res.status(404).json({ msg: "Task not found" });
  } else {
    res.json({ msg: "SINGLE TASK", task });
  }
};

const deleteTask = async (req: Request, res: Response) => {
  const { id: taskId } = req.params;
  const task = await Tasks.findIndex((t) => t.id === taskId);
  if (task === -1) {
    return res.status(404).json({ msg: "Task not found" });
  } else {
    const updatedTask = await Tasks.splice(task, 1)[0];
    res.status(200).json({ msg: "TASK DELETED", updatedTask });
  }
};

const updateTask = async (req: Request, res: Response) => {
  res.send("Update Task");
};
export { createTask, deleteTask, getAllTasks, getTask, updateTask };
