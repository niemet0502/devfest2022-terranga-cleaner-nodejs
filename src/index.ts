import initServer from "./initServer";
import routes from "./routes";

const app = initServer(routes);

app.listen(3000, () => console.log("Example app is listening on port 3000."));
