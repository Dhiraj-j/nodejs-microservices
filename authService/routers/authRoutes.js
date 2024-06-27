import { Router } from "express";
import AuthController from "../controller/AuthController.js";

const router = Router();

router.post("/auth/resgister", AuthController.register);

export default router;
