import jwt from "jsonwebtoken";
import User from "../user/user-entities";
import Session from "./session-entity";

export const createUserSession = (user: User) => {
  const accessToken = jwt.sign(user.toJSON(), "accessTokenPrivateKey");

  const session = new Session();

  session.token = accessToken;
  session.user = user;

  return session;
};
