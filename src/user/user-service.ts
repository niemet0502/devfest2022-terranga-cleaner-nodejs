import User from "./user-entities";

export const create = (req: Request) => {
  const { lastname, firstname, email, password } = req.body as any;
  const user = new User();

  user.lastname = lastname;
  user.firstname = firstname;
  user.email = email;
  user.password = password; // crypt password witm6 bcryp

  return user;
};
