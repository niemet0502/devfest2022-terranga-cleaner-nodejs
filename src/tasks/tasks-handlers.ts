import { Request, Response } from "express";
import * as taskService from "./tasks-service";

export const createTask = async (req: Request, res: Response) => {
  const user = res.locals.user;

  if (!user) {
    return res.status(404);
  }

  let task = taskService.create(req.body as any);

  task.user = user;
  task = await taskService.save(task);

  return res.status(200).send(task);
};

export const getTasks = async (req: Request, res: Response) => {
  const user = res.locals.user;

  if (!user) {
    return res.status(400).send({ message: "User id is missing" });
  }

  const tasks = await taskService.findTasksByUser(user.id);
  return res.status(200).send(tasks);
};

export const updateTask = async (req: Request, res: Response) => {
  let task = await taskService.save(req.body);
  return res.status(200).send(task);
};

export const getTask = async (req: Request, res: Response) => {
  let id = parseInt(req.params.id);

  let task = await taskService.findTaskById(id);

  return res.status(200).send(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  let id = parseInt(req.params.id);

  await taskService.deleteTask(id);

  return res
    .status(200)
    .send({ message: "Task had been successfully deleted" });
};
