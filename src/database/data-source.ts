import { DataSource } from "typeorm";
import { Task } from "../tasks/tasks-entities";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "",
  database: "taskmanagement",
  synchronize: true,
  logging: true,
  entities: [Task],
  subscribers: [],
  migrations: [],
});
