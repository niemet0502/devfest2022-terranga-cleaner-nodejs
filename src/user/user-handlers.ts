import userRepository from "./user-repositories";
import * as userService from "./user-service";

export const createUser = async (req: Request, res: Response) => {
  let user = userService.create(req);

  user = await userRepository.save(user);

  res.status(200).send(user);
};
