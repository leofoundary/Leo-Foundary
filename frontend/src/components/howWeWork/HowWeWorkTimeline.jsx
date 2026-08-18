import React, {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TimelinePath from "./TimelinePath";
import TimelineNode from "./TimelineNode";
import HowWeWorkCard from "./HowWeWorkCard";

import {
  steps,
  timelinePoints,
} from "../../data/howWeWorkData";

gsap.registerPlugin(ScrollTrigger);

const HowWeWorkTimeline = () => {
  const [scrollActiveStep, setScrollActiveStep] =
    useState(null);

  const [hoveredStep, setHoveredStep] =
    useState(null);

  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  const pathRef = useRef(null);

  const pathDotRef = useRef(null);
  const pathGlowRef = useRef(null);

  const nodeRefs = useRef([]);
  const cardRefs = useRef([]);

  const endPointRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /*
       * ============================================
       * DESKTOP ONLY
       * ============================================
       */

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const path = pathRef.current;

        if (!path) return;

        const pathLength =
          path.getTotalLength();

        /*
         * ------------------------------------------
         * INITIAL WALKING DOT
         * ------------------------------------------
         */

        const startPoint =
          path.getPointAtLength(0);

        if (pathDotRef.current) {
          gsap.set(pathDotRef.current, {
            attr: {
              cx: startPoint.x,
              cy: startPoint.y,
            },
          });
        }

        if (pathGlowRef.current) {
          gsap.set(pathGlowRef.current, {
            attr: {
              cx: startPoint.x,
              cy: startPoint.y,
            },
          });
        }

        /*
         * ------------------------------------------
         * INITIAL NODES
         * ------------------------------------------
         */

        nodeRefs.current.forEach((node) => {
          if (!node) return;

          gsap.set(node, {
            scale: 0.75,
            opacity: 0.35,
          });
        });

        /*
         * ------------------------------------------
         * INITIAL CARDS
         * ------------------------------------------
         */

        cardRefs.current.forEach((card) => {
          if (!card) return;

          gsap.set(card, {
            opacity: 0.35,
            y: 35,
          });
        });

        /*
         * ------------------------------------------
         * INITIAL END POINT
         * ------------------------------------------
         */

        if (endPointRef.current) {
          gsap.set(endPointRef.current, {
            scale: 0.5,
            opacity: 0.25,
          });
        }

        /*
         * ==========================================
         * MAIN SCROLL TIMELINE
         * ==========================================
         */

        gsap.timeline({
          scrollTrigger: {
            trigger: timelineRef.current,

            start: "top 65%",
            end: "bottom 75%",

            scrub: 1,

            invalidateOnRefresh: true,

            onUpdate: (self) => {
              const progress = self.progress;

              /*
               * =====================================
               * WALKING DOT
               * =====================================
               */

              if (
                pathDotRef.current &&
                pathGlowRef.current
              ) {
                const point =
                  path.getPointAtLength(
                    pathLength * progress
                  );

                gsap.set(
                  pathDotRef.current,
                  {
                    attr: {
                      cx: point.x,
                      cy: point.y,
                    },
                  }
                );

                gsap.set(
                  pathGlowRef.current,
                  {
                    attr: {
                      cx: point.x,
                      cy: point.y,
                    },
                  }
                );
              }

              /*
               * =====================================
               * ACTIVE STEP
               * =====================================
               */

              const stepProgress =
                1 / steps.length;

              let currentStep = Math.floor(
                progress / stepProgress
              );

              if (
                currentStep >= steps.length
              ) {
                currentStep =
                  steps.length - 1;
              }

              if (progress <= 0.02) {
                setScrollActiveStep(null);
              } else {
                setScrollActiveStep(
                  currentStep
                );
              }

              /*
               * =====================================
               * NODES
               * =====================================
               */

              nodeRefs.current.forEach(
                (node, index) => {
                  if (!node) return;

                  const nodeStart =
                    index / steps.length;

                  const nodeEnd =
                    (index + 1) /
                    steps.length;

                  if (
                    progress >= nodeEnd
                  ) {
                    gsap.to(node, {
                      scale: 1,
                      opacity: 1,
                      duration: 0.2,
                      overwrite: true,
                    });
                  } else if (
                    progress >= nodeStart
                  ) {
                    gsap.to(node, {
                      scale: 1.08,
                      opacity: 1,
                      duration: 0.2,
                      overwrite: true,
                    });
                  } else {
                    gsap.to(node, {
                      scale: 0.75,
                      opacity: 0.35,
                      duration: 0.2,
                      overwrite: true,
                    });
                  }
                }
              );

              /*
               * =====================================
               * CARDS
               * =====================================
               */

              cardRefs.current.forEach(
                (card, index) => {
                  if (!card) return;

                  const cardStart =
                    index / steps.length;

                  const cardEnd =
                    (index + 0.8) /
                    steps.length;

                  if (
                    progress >= cardEnd
                  ) {
                    gsap.to(card, {
                      opacity: 1,
                      y: 0,
                      duration: 0.25,
                      overwrite: true,
                    });
                  } else if (
                    progress >= cardStart
                  ) {
                    gsap.to(card, {
                      opacity: 1,
                      y: 0,
                      duration: 0.25,
                      overwrite: true,
                    });
                  } else {
                    gsap.to(card, {
                      opacity: 0.35,
                      y: 35,
                      duration: 0.25,
                      overwrite: true,
                    });
                  }
                }
              );

              /*
               * =====================================
               * END POINT
               * =====================================
               */

              if (endPointRef.current) {
                if (progress > 0.95) {
                  gsap.to(
                    endPointRef.current,
                    {
                      scale: 1,
                      opacity: 1,
                      duration: 0.25,
                      overwrite: true,
                    }
                  );
                } else {
                  gsap.to(
                    endPointRef.current,
                    {
                      scale: 0.5,
                      opacity: 0.25,
                      duration: 0.25,
                      overwrite: true,
                    }
                  );
                }
              }
            },
          },
        });

        ScrollTrigger.refresh();

        return () => {
          ScrollTrigger.getAll().forEach(
            (trigger) => {
              if (
                trigger.vars.trigger ===
                timelineRef.current
              ) {
                trigger.kill();
              }
            }
          );
        };
      });
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        w-full
        overflow-hidden
        px-4
        pb-20
        pt-16
        text-white
        sm:px-6
        sm:pb-28
        sm:pt-24
      "
    >

      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[20%]
          h-[350px]
          w-[350px]
          -translate-x-1/2
          rounded-full
          bg-emerald-400/[0.025]
          blur-[100px]

          sm:h-[450px]
          sm:w-[450px]
          sm:blur-[130px]

          md:h-[550px]
          md:w-[550px]
          md:blur-[150px]
        "
      />

      <div
        ref={timelineRef}
        className="
          relative
          mx-auto
          w-full
          max-w-[1150px]
        "
      >

        {/* =========================================
            DESKTOP SVG PATH
        ========================================= */}

        <div className="hidden md:block">
          <TimelinePath
            ref={pathRef}
            pathDotRef={pathDotRef}
            pathGlowRef={pathGlowRef}
          />
        </div>


        {/* =========================================
            DESKTOP TIMELINE
        ========================================= */}

        <div
          className="
            relative
            hidden
            h-[1450px]
            md:block
          "
        >

          {steps.map((step, index) => {
            const point =
              timelinePoints[index];

            const isActive =
              scrollActiveStep === index;

            const isHovered =
              hoveredStep === index;

            return (
              <React.Fragment
                key={step.number}
              >

                {/* Card */}

                <HowWeWorkCard
                  step={step}
                  point={point}
                  index={index}
                  isActive={isActive}
                  isHovered={isHovered}

                  cardRef={(element) => {
                    cardRefs.current[index] =
                      element;
                  }}

                  onMouseEnter={() =>
                    setHoveredStep(index)
                  }

                  onMouseLeave={() =>
                    setHoveredStep(null)
                  }
                />

                {/* Node */}

                <TimelineNode
                  step={step}
                  point={point}
                  isActive={isActive}

                  nodeRef={(element) => {
                    nodeRefs.current[index] =
                      element;
                  }}
                />

              </React.Fragment>
            );
          })}


          {/* Desktop End Point */}

          <div
            ref={endPointRef}
            className="
              absolute
              left-1/2
              top-[1410px]
              z-20
              h-3
              w-3
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              border
              border-emerald-400
              bg-[#050505]
              shadow-[0_0_15px_rgba(52,211,153,0.5)]
            "
          />

        </div>


        {/* =========================================
            MOBILE TIMELINE
        ========================================= */}

        <div
          className="
            relative
            block
            px-1
            md:hidden
          "
        >

          {/* Vertical Timeline Line */}

          <div
            className="
              absolute
              bottom-3
              left-[17px]
              top-3
              w-px
              bg-gradient-to-b
              from-emerald-400/10
              via-emerald-400/40
              to-emerald-400/10
            "
          />


          {/* Mobile Steps */}

          <div
            className="
              flex
              flex-col
              gap-8
              sm:gap-10
            "
          >

            {steps.map(
              (step, index) => {
                const isActive =
                  scrollActiveStep ===
                  index;

                const isHovered =
                  hoveredStep === index;

                return (
                  <div
                    key={step.number}
                    className="
                      relative
                      pl-10
                    "
                  >

                    {/* Mobile Node */}

                    <div
                      className={`
                        absolute
                        left-[17px]
                        top-6
                        z-20
                        h-[18px]
                        w-[18px]
                        -translate-x-1/2
                        rounded-full
                        border
                        bg-[#050505]
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? `
                              scale-125
                              border-emerald-400
                              bg-emerald-400
                              shadow-[0_0_18px_rgba(52,211,153,0.65)]
                            `
                            : `
                              border-emerald-400/40
                            `
                        }
                      `}
                    >

                      {/* Inner dot */}

                      <div
                        className={`
                          absolute
                          left-1/2
                          top-1/2
                          h-1.5
                          w-1.5
                          -translate-x-1/2
                          -translate-y-1/2
                          rounded-full
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "bg-white"
                              : "bg-emerald-400/50"
                          }
                        `}
                      />

                    </div>


                    {/* Mobile Card */}

                    <div
                      className="
                        w-full
                        min-w-0
                      "
                    >

                      <HowWeWorkCard
                        step={step}
                        point={null}
                        index={index}
                        isActive={isActive}
                        isHovered={isHovered}

                        cardRef={(element) => {
                          cardRefs.current[
                            index
                          ] = element;
                        }}

                        onMouseEnter={() =>
                          setHoveredStep(
                            index
                          )
                        }

                        onMouseLeave={() =>
                          setHoveredStep(
                            null
                          )
                        }
                      />

                    </div>

                  </div>
                );
              }
            )}

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM STATEMENT
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          mt-12
          max-w-[600px]
          px-4
          text-center

          sm:mt-16
        "
      >

        <p
          className="
            text-lg
            tracking-wide
            text-gray-300

            sm:text-xl
          "
        >
          Your idea, now in{" "}

          <span className="text-emerald-400">
            motion.
          </span>

        </p>

      </div>

    </section>
  );
};

export default HowWeWorkTimeline;