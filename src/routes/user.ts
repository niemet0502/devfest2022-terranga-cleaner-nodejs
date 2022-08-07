import express from "express";
import requireUser from "../middleware/requireUser";
import { validateBody } from "../middleware/validateBody";
import { userSchema } from "../schema/user";
import { createUser, getUsers } from "../user/user-handlers";

const router = express.Router();

router.post("/", validateBody(userSchema), createUser);
router.get("/", requireUser, getUsers);

export default router;
