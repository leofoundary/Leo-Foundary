import React, { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    // Keep ScrollTrigger synchronized with Lenis
    lenis.on("scroll", ScrollTrigger.update);

    // Let GSAP's ticker drive Lenis
    const update = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(update);

    // Prevent GSAP ticker lag from interfering with Lenis
    gsap.ticker.lagSmoothing(0);

    // Recalculate ScrollTrigger positions
    ScrollTrigger.refresh();

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
    };
  }, []);

  return null;
};

export default SmoothScroll;