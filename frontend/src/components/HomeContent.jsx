import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

import "../style/HomeContent.css";
import HomeButton from "../components/HomeButton";
import HomeTag from "./HomeTag";
import HomeMainText from "./HomeMainText";

const HomeContent = () => {
  const contentRef = useRef(null);

  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    // Tag first
    tl.from(".hero-tag", {
      y: 30,
      opacity: 0,
      duration: 0.7,
    })

      // Text + buttons appear together
      .from(
        ".hero-main-text",
        {
          y: 100,
          opacity: 0,
          duration: 1.1,
          ease: "power4.out",
        },
        "-=0.1"
      )
      .from(
        ".hero-buttons",
        {
          y: 60,
          opacity: 0,
          duration: 0.8,
          ease: "power4.out",
        },
        "<"
      );
  }, contentRef);

  return () => ctx.revert();
}, []);

  return (
    <div
      ref={contentRef}
      className="relative flex h-full w-full flex-col items-center justify-center text-white"
    >
      <HomeTag />

      <HomeMainText />

      <div className="hero-buttons">
        <HomeButton
          href="/contact"
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