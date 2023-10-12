import { Router } from "express";

const router = Router();

const sliders = [
  {
    title: "Sed ut perspiciatis unde omnis iste natus",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    image: "",
  },
  {
    title: "Proin elementum massa et felis",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    image: "",
  },
  {
    title: "Nulla rhoncus valputate congue",
    text: "Aenean rutrum eros nec lacus vehicula, semper euismod dui aliquam.",
    image: "",
  },
];

router.get("/slider", (req, res) => {
  res.json(sliders);
});

export default router;
