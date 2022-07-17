import "reflect-metadata";
import { AppDataSource } from "./database/data-source";
import initServer, { createDataBaseConnection } from "./initServer";
import routes from "./routes";

createDataBaseConnection(AppDataSource);
const app = initServer(routes);

app.listen(3000, () => console.log("Task management app is listening on port 3000."));
