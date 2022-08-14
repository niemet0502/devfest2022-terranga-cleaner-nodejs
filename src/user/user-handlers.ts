import * as userService from "./user-service";

export const createUser = async (req: Request, res: Response) => {
  let { email } = req.body as any;

  let user = await userService.findUserByEmail(email);

  if (user) {
    return res.status(403).send({ email: "email must be unique" });
  }

  user = await userService.create(req);

  user = await userService.save(user);

  return res.status(200).send(user);
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await userService.fetchAll();

  return res.status(200).send(users);
};
