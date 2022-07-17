import express from "express";
import { validateBody } from "../middleware/validateBody";
import { taskSchema } from "../schema/task";
import {
  createTask,
  getTask,
  getTasks,
  updateTask,
} from "../tasks/tasks-handlers";
const router = express.Router();

router.get("/", getTasks);
router.post("/", validateBody(taskSchema), createTask);
router.put("/", updateTask);
router.get("/:id", getTask);

export default router;
