import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import { Routes, Route } from "react-router"
import SmoothScroll from "./components/SmoothScroll";

const App = () => {
  return (
    <>
      <SmoothScroll />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      
    </>
  );
};

export default App;