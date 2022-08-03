import { Request, Response } from "express";
import { findUserAccount } from "./auth-service";

export const signIn = (req: Request, res: Response) => {
  const user = findUserAccount(req.body);
};
