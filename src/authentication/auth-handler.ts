import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { findUserByEmail } from "../user/user-service";
import { createUserSession } from "./auth-service";
import sessionRepository from "./session-repositories";

export const signIn = async (req: Request, res: Response) => {
  const message = "Invalid email or password";
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user) {
    return res.send({ message });
  }

  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.send({ message });
  }

  const session = createUserSession(user);
  session = await sessionRepository.save(session);

  res.status(201).send(session);
};

export const signOut = async (req: Request, res: Response) => {
  const token = res.locals.token;

  await sessionRepository.delete({ token });

  return res.send({ message: "successfully sign out" });
};
