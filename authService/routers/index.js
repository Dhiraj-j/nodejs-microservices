import { Router } from "express";
import AuthRouter from "./authRoutes.js";
const router = Router();

router.use("/api", AuthRouter);
export default router;
