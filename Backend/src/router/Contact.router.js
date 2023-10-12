import { Router } from "express";
import { contactController } from "../controllers/Contact.controllers.js";

const router = Router();

router.post("/contact", contactController);

export default router;
