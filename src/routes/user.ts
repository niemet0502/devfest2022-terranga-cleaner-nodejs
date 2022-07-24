import express from "express";
import { validateBody } from "../middleware/validateBody";
import { userSchema } from "../schema/user";
import { createUser, getUsers } from "../user/user-handlers";

const router = express.Router();

router.post("/", validateBody(userSchema), createUser);
router.get("/", getUsers);

export default router;
