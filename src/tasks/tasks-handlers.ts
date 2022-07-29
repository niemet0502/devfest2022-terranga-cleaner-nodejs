import { Request, Response } from "express";
import taskRepository from "./tasks-repositories";
import * as taskService from "./tasks-service";

export const createTask = async (req: Request, res: Response) => {
  let task = taskService.create(req as any);

  task = await taskRepository.save(task);

  res.status(200).send(task);
};

export const getTasks = async (req: Request, res: Response) => {
  let userId = parseInt(req.params.userId);
  let tasks = await taskRepository.find({
    order: { id: "DESC" },
    where: { user: { id: userId } },
  });
  res.status(200).send(tasks);
};

export const updateTask = async (req: Request, res: Response) => {
  let task = await taskRepository.save(req.body);
  res.status(200).send(task);
};

export const getTask = async (req: Request, res: Response) => {
  let id = parseInt(req.params.id);

  let task = await taskRepository.findOne({ where: { id: id } });

  res.status(200).send(task);
};
