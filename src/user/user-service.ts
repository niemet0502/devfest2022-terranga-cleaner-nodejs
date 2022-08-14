import bcrypt from "bcrypt";
import User from "./user-entities";
import userRepository from "./user-repositories";

export const create = async (req: Request) => {
  const { lastname, firstname, email, password } = req.body as any;
  const user = new User();

  user.lastname = lastname;
  user.firstname = firstname;
  user.email = email;
  user.password = await bcrypt.hash(password, 10);

  return user;
};

export const findUserByEmail = async (email: string) => {
  return await userRepository.findOne({
    where: { email: email },
  });
};

export const save = async (user: User) => {
  user = await userRepository.save(user);

  return user;
};

export const fetchAll = async () => {
  const users = await userRepository.find();

  return users;
};
