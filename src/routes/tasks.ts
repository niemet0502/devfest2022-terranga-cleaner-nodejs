import express from "express";
import requireUser from "../middleware/requireUser";
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

router.get("/", requireUser, getTasks);
router.post("/", requireUser, validateBody(taskSchema), createTask);
router.put("/", requireUser, updateTask);
router.get("/:id", requireUser, getTask);
router.delete("/:id", requireUser, deleteTask);

export default router;
