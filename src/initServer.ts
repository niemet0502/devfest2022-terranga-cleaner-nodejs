import cors from "cors";
import express, { Router } from "express";

export default function initServer(router: Router) {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded());
  app.use("/v1", router);

  return app;
}
