import { Request, Response } from "express";
import taskRepository from "./tasks-repositories";
import * as taskService from "./tasks-service";

export const createTask = async (req: Request, res: Response) => {
  let task = taskService.create(req);

  task = await taskRepository.save(task);

  res.status(200).send(task);
};

export const getTasks = async (req: Request, res: Response) => {
  let tasks = await taskRepository.find();
  res.status(200).send(tasks);
};

export const updateTask = async (req: Request, res: Response) => {
  res.status(200).send();
};

export const getTask = async (req: Request, res: Response) => {
  let id = req.params.id;
  console.log(id);

  let task = await taskRepository.find({ where: { id: id } });

  res.status(200).send(task);
};
