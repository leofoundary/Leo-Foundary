import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reasons = [
  {
    number: "01",
    title: "Built Around Your Business",
    description:
      "We don't force your business into a predefined system. We understand your processes, challenges and goals, then build technology around the way you actually work.",
  },
  {
    number: "02",
    title: "Intelligence at the Core",
    description:
      "AI isn't added just because it's trending. We identify where intelligence can genuinely improve your operations, decision-making and customer experience.",
  },
  {
    number: "03",
    title: "Designed to Scale",
    description:
      "Our systems are built with the future in mind, giving you a strong technical foundation that can grow alongside your business.",
  },
  {
    number: "04",
    title: "From Idea to Execution",
    description:
      "From the first conversation to deployment and beyond, we work with you throughout the journey to turn ambitious ideas into working digital products.",
  },
];

const WhyLeoFoundary = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-heading", {
        y: 100,
        opacity: 0,
        duration: 2,
        ease: "power4.out",

        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden px-6 py-24 text-white"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/[0.03] blur-[140px]" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center">

        {/* =========================
            HEADING
        ========================== */}

        <div className="why-heading relative z-10 mt-[10vh] text-center">

          {/* Small Label */}

          <p className="mb-5 text-xl font-semibold uppercase tracking-[0.35em] text-emerald-400">
            Why LeoFoundary
          </p>

          {/* Main Heading */}

          <h2 className="text-4xl font-medium leading-tight md:text-6xl lg:text-7xl">
            We Build With
            <br />

            <span className="text-emerald-400 font-bold">
              Purpose.
            </span>
          </h2>

          {/* Curved Underline */}

          <div className="mx-auto mt-5 mb-12 h-5 w-44">
            <svg
              viewBox="0 0 180 25"
              fill="none"
              className="h-full w-full"
            >
              <path
                d="M4 13C35 25 67 24 91 13C116 2 143 2 176 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="text-emerald-400"
              />
            </svg>
          </div>
        </div>

        {/* =========================
            CARDS
        ========================== */}

        <div className="grid w-full max-w-5xl gap-5 md:grid-cols-2">

          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="
                relative
                min-h-[280px]
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.02]
                p-8
                transition-all
                duration-500
                hover:border-emerald-400/30
                hover:bg-emerald-400/[0.03]
                font-light
              "
            >

              {/* Card Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-20
                  h-40
                  w-40
                  rounded-full
                  bg-emerald-400/[0.05]
                  blur-3xl
                "
              />

              <div className="relative flex h-full flex-col">

                {/* Number */}

                <div className="flex items-center justify-between">

                  <span className="text-sm font-medium tracking-[0.2em] text-emerald-400">
                    {reason.number}
                  </span>

                  <div className="h-px w-16 bg-emerald-400/30" />

                </div>

                {/* Content */}

                <div className="mt-auto">

                  <h3 className="text-2xl font-semibold md:text-3xl">
                    {reason.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 md:text-base">
                    {reason.description}
                  </p>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyLeoFoundary;