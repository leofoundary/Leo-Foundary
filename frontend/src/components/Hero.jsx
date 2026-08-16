import React from "react";
import Navbar from "./Navbar";
import HomeContent from "./HomeContent";

const Hero = () => {
  return (
    <section className="relative flex h-screen w-full flex-col">

      <div className="flex-1">
        <HomeContent />
      </div>
    </section>
  );
};

export default Hero;