import userRepository from "../user/user-repositories";

export const findUserAccount = async (body: any) => {
  const { email, password } = body;

  const user = await userRepository.findOne({ where: { email: email } });

  if (!user) {
  }
};
