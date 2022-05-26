import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 5432,
  username: "root",
  password: "",
  database: "taskmanagement",
  synchronize: true,
  logging: true,
  entities: [],
  subscribers: [],
  migrations: [],
});
