import React from "react";
import Navbar from "../components/Navbar";
import HomeContent from "../components/HomeContent";
import HomeServices from "../components/HomeServices";
import HomeBackground from "../components/HomeBackground";
import CustomCursor from "../components/CustomCursor";
import WhyLeoFoundary from "../components/WhyLeoFoundary";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <>
      <HomeBackground />
      <CustomCursor />

      <div className="relative z-10 cursor-none">
        <Hero />
        <HomeServices />
        <WhyLeoFoundary />
      </div>
    </>
  );
};

export default Home;