import React from "react";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import HomeServices from "../components/HomeServices";
import HomeBackground from "../components/HomeBackground";
import CustomCursor from "../components/CustomCursor";
import WhyLeoFoundary from "../components/WhyLeoFoundary";
import Hero from "../components/Hero";
import HowWeWork from "../sections/HowWeWork";
import FinalCTA from "../sections/FinalCTA";
import LeoFoundarySignature from "../sections/LeoFoundarySignature";
import Footer from "../sections/Footer";
import FAQ from "../sections/FAQ";
import ProductsSection from "../sections/ProductsSection";

const Home = () => {
  return (
    <>
      <HomeBackground />
      <CustomCursor />

      <div className="relative z-10">
        <Hero />
        <HomeServices />
        <WhyLeoFoundary />
        <HowWeWork />
        <ProductsSection />
        <FAQ />
        <FinalCTA />
        <LeoFoundarySignature /> 
        <Footer />
      </div>
    </>
  );
};

export default Home;