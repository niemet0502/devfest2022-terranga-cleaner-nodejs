import { Request, Response } from "express";

export const createUser = (req: Request, res: Response) => {
  res.status(201).send("create");
};
