import { Request, Response } from "express";
import taskRepository from "./tasks-repositories";
import * as taskService from "./tasks-service";

export const createTask = async (req: Request, res: Response) => {
  const user = res.locals.user;

  if (!user) {
    res.sendStatus(404);
  }

  let task = taskService.create(req.body as any);

  task.user = user;
  task = await taskRepository.save(task);

  res.status(200).send(task);
};

export const getTasks = async (req: Request, res: Response) => {
  const user = res.locals.user;

  if (!user) {
    res.status(400).send({ message: "User id is missing" });
  }

  let tasks = await taskRepository.find({
    order: { id: "DESC" },
    where: { user: { id: user.id } },
  });
  res.status(200).send(tasks);
};

export const updateTask = async (req: Request, res: Response) => {
  let task = await taskRepository.save(req.body);
  res.status(200).send(task);
};

export const getTask = async (req: Request, res: Response) => {
  let id = parseInt(req.params.id);

  let task = await taskRepository.findOne({
    where: { id: id },
    relations: { user: true },
  });

  res.status(200).send(task);
};

export const deleteTask = async (req: Request, res: Response) => {
  let id = parseInt(req.params.id);

  console.log(id);

  await taskRepository.delete(id);

  res.status(200).send({ message: "Task had been successfully deleted" });
};
