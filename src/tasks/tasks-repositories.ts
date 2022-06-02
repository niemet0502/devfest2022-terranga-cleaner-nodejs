import { AppDataSource } from "../database/data-source";
import Task from "./tasks-entities";

const repository = AppDataSource.getRepository(Task);

export default repository;
