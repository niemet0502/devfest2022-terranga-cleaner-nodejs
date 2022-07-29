import express from "express";
import { validateBody } from "../middleware/validateBody";
import { taskSchema } from "../schema/task";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../tasks/tasks-handlers";
const router = express.Router();

router.get("/:userId", getTasks);
router.post("/:userId", validateBody(taskSchema), createTask);
router.put("/", updateTask);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);

export default router;
