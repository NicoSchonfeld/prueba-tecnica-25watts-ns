import { Router } from "express";

const router = Router();

router.post("/contact", (req, res) => {
  const data = req?.body;

  res.send(200).json({ data });
});

export default router;
