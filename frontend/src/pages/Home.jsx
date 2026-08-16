import React from "react";

import HomeServices from "../components/HomeServices";
import HomeBackground from "../components/HomeBackground";
import CustomCursor from "../components/CustomCursor";
import WhyLeoFoundary from "../components/WhyLeoFoundary";

import Hero from "../components/Hero";

import HowWeWork from "../sections/HowWeWork";
import ProductsSection from "../sections/ProductsSection";
import FAQ from "../sections/FAQ";
import FinalCTA from "../sections/FinalCTA";
import LeoFoundarySignature from "../sections/LeoFoundarySignature";
import Footer from "../sections/Footer";


const Home = () => {
  return (
    <>
      {/* =====================================
          GLOBAL HOME BACKGROUND
      ===================================== */}

      <HomeBackground />

      <CustomCursor />


      {/* =====================================
          PAGE CONTENT
      ===================================== */}

      <main className="relative z-10">

        {/* HERO */}
        <Hero />


        {/* WHAT WE BUILD */}
        <HomeServices />


        {/* PRODUCTS */}
        <ProductsSection />


        {/* WHY LEO FOUNDRY */}
        <WhyLeoFoundary />


        {/* HOW WE WORK */}
        <HowWeWork />


        {/* FAQ */}
        <FAQ />


        {/* FINAL CTA */}
        <FinalCTA />


        {/* SIGNATURE */}
        <LeoFoundarySignature />


        {/* FOOTER */}
        <Footer />

      </main>
    </>
  );
};


export default Home;