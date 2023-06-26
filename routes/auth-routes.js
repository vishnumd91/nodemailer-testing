import { Router } from "express";
import { validateEmail } from "../controller/index.js";

const router = Router();

router.post("/validate", validateEmail);

export default router;
