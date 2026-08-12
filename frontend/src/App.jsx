import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { Routes, Route } from "react-router";
import SmoothScroll from "./components/SmoothScroll";
import ScrollProgress from "./components/ScrollProgress";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";

const App = () => {
  return (
    <>
      <SmoothScroll />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />

        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </>
  );
};

export default App;
