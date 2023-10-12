import { Router } from "express";
import { getProducts } from "../controllers/Products.controllers.js";

const router = Router();

router.get("/products", getProducts);

export default router;
