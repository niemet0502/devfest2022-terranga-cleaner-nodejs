import { Request, Response } from "express";

export const createTask = (req: Request, res: Response) => {
  res.status(201).send("create new task");
};

export const getTask = (req: Request, res: Response) => {
  res.status(200).send("task list");
};
