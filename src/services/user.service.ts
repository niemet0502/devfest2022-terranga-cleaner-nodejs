import { DocumentDefinition } from "mongoose";
import Users, { UserDocument } from "../models/Users";

export async function createUser(
  input: DocumentDefinition<
    Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">
  >
) {
  try {
    return await Users.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}
