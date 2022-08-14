import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../user/user-entities";
import Session from "./session-entity";
import sessionRepository from "./session-repositories";

export const createUserSession = (user: User) => {
  const accessToken = jwt.sign(JSON.stringify(user), "accessTokenPrivateKey");

  const session = new Session();

  session.token = accessToken;
  session.user = user;
  session.expirationDate = new Date();

  return session;
};

export const deleteByToken = async (token: string) => {
  const result = await sessionRepository.delete({ token });

  return result;
};

export const save = async (session: Session) => {
  session = await sessionRepository.save(session);

  return session;
};

export const validPassword = async (password: string, user: User) => {
  const result = await bcrypt.compare(password, user.password);

  return result;
};
