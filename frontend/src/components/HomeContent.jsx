import React from "react";
import "../style/HomeContent.css";
import HomeButton from "../components/HomeButton";
import HomeTag from "./HomeTag";
import HomeMainText from "./HomeMainText";

const HomeContent = () => {
  return (
    <div className="relative w-full h-[80%] text-white flex flex-col items-center justify-center">
      <HomeTag />
      <HomeMainText />
      <div className="hero-buttons">
        <HomeButton
          href="/about" 
          text="Get Started" 
          hoverText="Explore More" 
        />
        <HomeButton
          href="/contact"
          text="Contact Us"
          hoverText="Get in Touch"
        />
      </div>
    </div>
  );
};

export default HomeContent;
