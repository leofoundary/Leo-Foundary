import React from 'react';
import Home from './pages/Home';
import Contact from './pages/Contact';
import { Routes, Route } from "react-router"
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );
};

export default App;