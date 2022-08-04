import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { findUserByEmail } from "../user/user-service";

export const signIn = async (req: Request, res: Response) => {
  const message = "Invalid email or password";
  const { email, password } = req.body;
  const user = await findUserByEmail(email);

  if (!user) {
    return res.send(message);
  }

  const validPassword = bcrypt.compare(password, user.password);

  if (!validPassword) {
    return res.send(message);
  }
};
