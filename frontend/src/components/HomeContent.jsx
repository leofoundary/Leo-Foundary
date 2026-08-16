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

      tl.from(".hero-tag", {
        y: 30,
        opacity: 0,
        duration: 0.7,
      })
        .from(
          ".hero-main-text",
          {
            y: 100,
            opacity: 0,
            duration: 1.1,
          },
          "-=0.1"
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-buttons",
          {
            y: 40,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.35"
        );
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={contentRef}
      className="
        relative
        flex
        h-full
        w-full
        flex-col
        items-center
        justify-center
        px-6
        text-center
        text-white
      "
    >
      <HomeTag />

      <HomeMainText />


      <div
        className="
          hero-buttons
          mt-9
          flex
          flex-col
          items-center
          gap-4
          sm:flex-row
        "
      >
        <HomeButton
          href="/products"
          text="Explore Products"
          hoverText="View Products"
        />

        <HomeButton
          href="/contact"
          text="Start a Conversation"
          hoverText="Get in Touch"
        />
      </div>
    </div>
  );
};

export default HomeContent;