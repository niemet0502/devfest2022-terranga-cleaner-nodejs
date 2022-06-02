import { Request, Response } from "express";
import taskRepository from "./tasks-repositories";
import * as taskService from "./tasks-service";

export const createTask = (req: Request, res: Response) => {
  let task = taskService.create(req);

  task = taskRepository.create(task);

  res.status(200).send(task);
};

export const getTask = (req: Request, res: Response) => {
  res.status(200).send("task list");
};
