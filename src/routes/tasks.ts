import express from "express";
import { createTask, getTask } from "../tasks/tasks-handlers";
const router = express.Router();

router.get("/", getTask);
router.post("/", createTask);

export default router;
