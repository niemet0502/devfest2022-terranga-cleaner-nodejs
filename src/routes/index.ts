import express from "express";
import authRoutes from "./auth";
import taskRoutes from "./tasks";
import userRoutes from "./user";

const router = express.Router();

router.use("/tasks", taskRoutes);
router.use("/users", userRoutes);
router.use("/auth", authRoutes);

export default router;
