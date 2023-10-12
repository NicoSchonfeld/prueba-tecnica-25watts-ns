import React, { Suspense, lazy, useEffect, useState } from "react";
import Loading from "./pages/Loading/Loading";

const Navbar = lazy(() => import("./components/Navbar"));
const HomePage = lazy(() => import("./pages/Home/HomePage"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Services = lazy(() => import("./pages/Services/Services"));
const Products = lazy(() => import("./pages/Products/Products"));
const MoreDetails = lazy(() => import("./pages/MoreDetails/MoreDetails"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const App = () => {
  const [products, setProducts] = useState([]);
  const [slider, setSlider] = useState([]);

  const getProducts = async () => {
    /* http://localhost:8989 */

    const res = await fetch(
      "https://prueba-tecnica-25watts-ns-production.up.railway.app/api/products"
    );
    const data = await res.json();

    setProducts(data);
  };

  const getSlider = async () => {
    const res = await fetch(
      "https://prueba-tecnica-25watts-ns-production.up.railway.app/api/slider"
    );
    const data = await res.json();

    setSlider(data);
  };

  useEffect(() => {
    getProducts();
    getSlider();
  }, []);

  // En caso de agregar un loading a la página de inicio, activar el fallback en línea 39.

  return (
    <Suspense /* fallback={<Loading />} */>
      <Navbar />
      <HomePage slider={slider} />
      <AboutUs />
      <Services />
      <Products cards={products} />
      <MoreDetails />
      <Contact />
      <Footer />
    </Suspense>
  );
};

export default App;
