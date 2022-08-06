import { DataSource } from "typeorm";
import Session from "../authentication/session-entity";
import Task from "../tasks/tasks-entities";
import User from "../user/user-entities";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "taskmanagement",
  synchronize: true,
  logging: true,
  entities: [User, Task, Session],
  subscribers: [],
  migrations: [],
});
