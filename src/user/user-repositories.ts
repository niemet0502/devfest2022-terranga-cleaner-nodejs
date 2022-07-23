import { AppDataSource } from "../database/data-source";
import User from "./user-entities";

const repository = AppDataSource.getRepository(User);

export default repository;
