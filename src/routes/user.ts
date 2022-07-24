import express from "express";
import { createUser, getUsers } from "../user/user-handlers";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);

export default router;
