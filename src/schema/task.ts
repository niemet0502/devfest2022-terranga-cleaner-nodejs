import Joi from "joi";

export const taskSchema = Joi.object().keys({
  name: Joi.string().required(),
  description: Joi.string().required(),
  isDueDate: Joi.boolean().required(),
  date: Joi.string().required(),
});
