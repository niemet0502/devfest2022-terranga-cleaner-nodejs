import { Request, Response } from "express";
import Joi from "joi";
import AppError from "../utils/AppError";

export const validateBody = (schema) => (req: Request, res: Response, next) => {
  const { value, error } = Joi.compile(schema).validate(req.body);

  if (error) {
    const errorMessage = error.details
      .map((details) => details.message)
      .join(", ");
    return next(new AppError(401, errorMessage));
  }

  Object.assign(req, value);

  return next();
};
