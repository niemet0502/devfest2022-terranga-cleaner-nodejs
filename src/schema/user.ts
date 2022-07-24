import Joi from "joi";

export const userSchema = Joi.object().keys({
  lastname: Joi.string().required(),
  firstname: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirm_password: Joi.any().valid(Joi.ref("password")).required(),
});
