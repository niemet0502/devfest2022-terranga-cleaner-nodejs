import cors from "cors";
import express, { Router } from "express";
import { DataSource } from "typeorm";
import deserializeUser from "./middleware/deserialiezeUser";

export default function initServer(router: Router) {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(deserializeUser);
  app.use("/v1", router);

  return app;
}

export async function createDataBaseConnection(AppDataSource: DataSource) {
  await AppDataSource.initialize();
}
