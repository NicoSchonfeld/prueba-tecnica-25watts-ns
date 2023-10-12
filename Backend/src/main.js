import "dotenv/config";
import express from "express";
import morgan from "morgan";
import cors from "cors";

import ProductsRouter from "./router/Products.router.js";
import SliderRouter from "./router/Slider.router.js";

const app = express();
const PORT = process.env.PORT || 8989;

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", ProductsRouter);
app.use("/api", SliderRouter);

app.listen(PORT, () => {
  console.log(`Server running in PORT: http://localhost:${PORT}`);
});
