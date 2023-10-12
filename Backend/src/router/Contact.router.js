import { Router } from "express";

const router = Router();

router.post("/contact", (req, res) => {
  const data = req?.body;

  if (!data) return res.status(500).json({ msg: "Error al cargar los datos." });

  res
    .status(200)
    .json({ res: `El mensaje de "${data?.email}" se envio correctamente.` });
});

export default router;
