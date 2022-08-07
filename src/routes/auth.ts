import express from "express";
import { signIn, signOut } from "../authentication/auth-handler";
import requireUser from "../middleware/requireUser";
import { validateBody } from "../middleware/validateBody";
import { authSchema } from "../schema/auth";

const router = express.Router();

router.post("/signin", validateBody(authSchema), signIn);
router.post("/signout", requireUser, signOut);

export default router;
