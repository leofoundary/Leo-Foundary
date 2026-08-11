import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HowWeWorkHero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".how-work-heading",
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power4.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".how-work-description",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, heroRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative w-full px-6 pt-32 text-white"
    >
      <div className="mx-auto max-w-[700px] text-center">

        <p className="how-work-heading text-[15px] font-light uppercase tracking-[0.45em] text-emerald-400">
          HOW WE WORK
        </p>

        <h1 className="how-work-heading mt-4 text-4xl font-medium tracking-[-0.04em] md:text-5xl lg:text-[56px]">
          Your Vision.
          <span className="text-emerald-400 font-bold">
            {" "}Our Method.
          </span>
        </h1>

        <p className="how-work-description font-light mx-auto mt-5 max-w-[600px] text-[15px] leading-6 text-gray-500">
          Six deliberate steps take your idea from first conversation
          to a living product — no black boxes, no guesswork, just a
          method refined across every build.
        </p>

      </div>
    </section>
  );
};

export default HowWeWorkHero;