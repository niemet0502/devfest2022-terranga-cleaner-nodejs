import jwt from "jsonwebtoken";
import User from "../user/user-entities";
import Session from "./session-entity";

export const createUserSession = (user: User) => {
  const accessToken = jwt.sign(JSON.stringify(user), "accessTokenPrivateKey");

  const session = new Session();

  session.token = accessToken;
  session.user = user;
  session.expirationDate = new Date();

  return session;
};
