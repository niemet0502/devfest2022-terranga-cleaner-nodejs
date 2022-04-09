import config from "config";
import express from "express";
import routes from "./routes";
import connect from "./utils/connect";

const port = config.get<number>("port");
const app = express();

app.listen(port, async () => {
  console.log("App is running");

  await connect();
  routes(app);
});
