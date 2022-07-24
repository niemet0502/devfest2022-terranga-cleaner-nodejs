import userRepository from "./user-repositories";
import * as userService from "./user-service";

export const createUser = async (req: Request, res: Response) => {
  let user = await userService.create(req);

  user = await userRepository.save(user);

  res.status(200).send(user);
};

export const getUsers = async (req: Request, res: Response) => {
  let users = await userRepository.find();

  res.status(200).send(users);
};
