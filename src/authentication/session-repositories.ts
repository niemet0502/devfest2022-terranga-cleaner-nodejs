import { AppDataSource } from "../database/data-source";
import Session from "./session-entity";

const repository = AppDataSource.getRepository(Session);

export default repository;
