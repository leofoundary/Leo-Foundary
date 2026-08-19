import React from "react";

import HomeBackground from "../components/HomeBackground";

import AboutHero from "../components/about/AboutHero";
import TheFoundry from "../components/about/TheFoundry";
import OurThinking from "../components/about/OurThinking";
import HowWeBuild from "../components/about/HowWeBuild";
import AboutEcosystem from "../components/about/AboutEcoSystem";
import AboutVision from "../components/about/AboutVision";
import AboutCTA from "../components/about/AboutCTA";

const About = () => {
  return (
    <main className="relative min-h-screen text-white">

      {/* SAME BACKGROUND AS HOME */}

      <HomeBackground />

      <div className="relative z-10">

        {/* =================================================
            HERO
        ================================================= */}

        <AboutHero />

        {/* =================================================
            THE FOUNDRY
        ================================================= */}

        <TheFoundry />

        {/* =================================================
            OUR THINKING
        ================================================= */}

        <OurThinking />

        {/* =================================================
            HOW WE BUILD
        ================================================= */}

        <HowWeBuild />

        {/* =================================================
            ECOSYSTEM
        ================================================= */}

        <AboutEcosystem />

        {/* =================================================
            VISION
        ================================================= */}

        <AboutVision />

        {/* =================================================
            CTA
        ================================================= */}

        <AboutCTA />

      </div>
    </main>
  );
};

export default About;