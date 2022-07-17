import express from "express";
import {
  createTask,
  getTask,
  getTasks,
  updateTask,
} from "../tasks/tasks-handlers";
const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.put("/", updateTask);
router.get("/:id", getTask);

export default router;
