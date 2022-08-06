import express from "express";
import { signIn } from "../authentication/auth-handler";
import { validateBody } from "../middleware/validateBody";
import { authSchema } from "../schema/auth";

const router = express.Router();

router.post("/signin", validateBody(authSchema), signIn);

export default router;
