import React, { useLayoutEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const FinalCTA = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.fromTo(
        ".cta-label",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      )
        .fromTo(
          ".cta-heading",
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.25"
        )
        .fromTo(
          ".cta-description",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .fromTo(
          ".cta-button",
          {
            y: 25,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.2,
            ease: "power3.out",
          },
          "-=0.35"
        )
        .fromTo(
          ".cta-bottom-line",
          {
            scaleX: 0,
            transformOrigin: "center",
          },
          {
            scaleX: 1,
            duration: 1,
            ease: "power3.inOut",
          },
          "-=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        px-6
        py-40
        text-white
        w-screen
      "
    >
      {/* Main emerald atmosphere */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[500px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-400/[0.035]
          blur-[150px]
        "
      />

      {/* Secondary glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[35%]
          h-[220px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-emerald-300/[0.025]
          blur-[100px]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Label */}

        <p
          className="
            cta-label
            text-[10px]
            font-medium
            uppercase
            tracking-[0.45em]
            text-emerald-400
          "
        >
          Let's Build
        </p>

        {/* Heading */}

        <h2
          className="
            cta-heading
            mx-auto
            mt-7
            max-w-4xl
            text-5xl
            font-light
            leading-[0.95]
            tracking-[-0.06em]
            sm:text-6xl
            md:text-7xl
            lg:text-[92px]
          "
        >
          Have an idea?
          <br />

          <span className="font-bold text-emerald-400">
            Let's build it.
          </span>
        </h2>

        {/* Description */}

        <p
          className="
            cta-description
            mx-auto
            mt-8
            max-w-xl
            text-sm
            font-light
            leading-7
            text-gray-500
            md:text-base
          "
        >
          You bring the vision.
          <br className="hidden sm:block" />
          We turn it into something people can
          actually use.
        </p>

        {/* CTA */}

        <div className="mt-10 flex justify-center">
          <Link
            to={"/contact"}
            className="
              cta-button
              group
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-emerald-400/30
              bg-emerald-400
              px-7
              py-4
              text-sm
              font-medium
              text-black
              transition-all
              duration-300
              hover:scale-[1.03]
              hover:bg-emerald-300
              hover:shadow-[0_0_45px_rgba(52,211,153,0.18)]
            "
          >
            Start a conversation

            <span
              className="
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                bg-black/10
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            >
              <ArrowUpRight
                size={14}
                strokeWidth={2}
              />
            </span>
          </Link>
        </div>

        {/* Small supporting text */}

        <p
          className="
            mt-5
            text-[9px]
            uppercase
            tracking-[0.25em]
            text-gray-700
          "
        >
          Have a project in mind? Let's talk.
        </p>
      </div>

      {/* Bottom separator */}

      <div className="relative z-10 mx-auto mt-28 max-w-6xl">
        <div
          className="
            cta-bottom-line
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        <div className="mt-5 flex items-center justify-between text-[8px] uppercase tracking-[0.25em] text-gray-700">
          <span>LeoFoundary</span>

          <span>Let's create something meaningful.</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;