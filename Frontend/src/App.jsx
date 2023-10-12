import React, { useEffect, useState } from "react";
import HomePage from "./pages/Home/HomePage";
import Navbar from "./components/Navbar";
import AboutUs from "./pages/AboutUs/AboutUs";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import MoreDetails from "./pages/MoreDetails/MoreDetails";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [products, setProducts] = useState([]);
  const [slider, setSlider] = useState([]);

  const getProducts = async () => {
    const res = await fetch("http://localhost:8989/api/products");
    const data = await res.json();

    setProducts(data);
  };

  const getSlider = async () => {
    const res = await fetch("http://localhost:8989/api/slider");
    const data = await res.json();

    setSlider(data);
  };

  useEffect(() => {
    getProducts();
    getSlider();
  }, []);

  return (
    <>
      <Navbar />
      <HomePage slider={slider} />
      <AboutUs />
      <Services />
      <Products cards={products} />
      <MoreDetails />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
