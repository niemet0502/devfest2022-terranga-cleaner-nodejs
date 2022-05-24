import { Request, Response } from "express";

function routes(app: any) {
  app.get("/marius", (req: Request, res: Response) => {
    res.status(201).send("call me");
  });
}

export default routes;
