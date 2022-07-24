import express from "express";
import taskRoutes from "./tasks";
import userRoutes from "./user";

const router = express.Router();

router.use("/tasks", taskRoutes);
router.use("/users", userRoutes);
export default router;
