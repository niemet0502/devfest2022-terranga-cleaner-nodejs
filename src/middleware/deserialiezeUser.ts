import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

const deserializeUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearerHeader = req.headers["authorization"];
  let accessToken = null;
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    accessToken = bearer[1];
  }

  if (!accessToken) {
    return next();
  }

  const decoded = jwt.verify(accessToken, "accessTokenPrivateKey");

  if (decoded) {
    res.locals.user = decoded;
    return next();
  }

  return next();
};

export default deserializeUser;
