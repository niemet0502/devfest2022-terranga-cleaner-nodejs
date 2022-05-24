import cors from "cors";
import express from "express";
import routes from "./route";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

routes(app);

app.listen(3000, () => console.log("Example app is listening on port 3000."));
