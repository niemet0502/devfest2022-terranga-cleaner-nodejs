import express from "express";
import { createTask, getTasks } from "../tasks/tasks-handlers";
const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);

export default router;
