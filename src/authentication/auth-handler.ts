import { Request, Response } from "express";
import { findUserByEmail } from "../user/user-service";
import * as service from "./auth-service";

export const signIn = async (req: Request, res: Response) => {
  const message = "Invalid email or password";
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user) {
    return res.send({ message });
  }

  const validPassword = await service.validPassword(password, user);

  if (!validPassword) {
    return res.send({ message });
  }

  const session = service.createUserSession(user);
  session = await service.save(session);

  return res.status(201).send(session);
};

export const signOut = async (req: Request, res: Response) => {
  const token = res.locals.token;

  await service.deleteByToken(token);

  return res.send({ message: "successfully sign out" });
};
