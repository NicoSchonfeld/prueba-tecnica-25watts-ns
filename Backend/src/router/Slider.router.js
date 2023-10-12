import { Router } from "express";

const router = Router();

const sliders = [
  {
    title: "Sed ut perspiciatis unde omnis iste natus",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    image: "https://i.ibb.co/f8q9Tch/slide1-background.png",
  },
  {
    title: "Proin elementum massa et felis",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.",
    image: "https://i.ibb.co/5sJpxJj/slide2-background.png",
  },
  {
    title: "Nulla rhoncus valputate congue",
    text: "Aenean rutrum eros nec lacus vehicula, semper euismod dui aliquam.",
    image: "https://i.ibb.co/7VwNXsg/slide3-background.png",
  },
];

router.get("/slider", (req, res) => {
  res.json(sliders);
});

export default router;
