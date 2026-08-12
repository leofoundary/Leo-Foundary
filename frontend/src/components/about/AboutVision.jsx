import React from "react";
import { motion } from "framer-motion";

const AboutVision = () => {
  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        py-40
        md:px-10
        md:py-56
        lg:px-14
      "
    >
      {/* BACKGROUND WORD */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          flex
          items-center
          justify-center
          overflow-hidden
        "
      >
        <div
          className="
            whitespace-nowrap
            text-[30vw]
            font-light
            leading-none
            tracking-[-0.12em]
            text-white/[0.018]
            select-none
          "
        >
          FUTURE
        </div>
      </div>

      {/* CONTENT */}

      <div className="relative z-10 mx-auto max-w-[1500px]">

        <p
          className="
            text-center
            text-[9px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-emerald-400
          "
        >
          Our vision
        </p>

        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="
            mx-auto
            mt-10
            max-w-6xl
            text-center
            text-5xl
            font-light
            leading-[0.92]
            tracking-[-0.07em]
            text-white
            md:text-7xl
            lg:text-[7vw]
          "
        >
          Software should feel less
          like a tool and more like
          an extension of the way
          you work.
        </motion.h2>

        <p
          className="
            mx-auto
            mt-12
            max-w-xl
            text-center
            text-sm
            font-light
            leading-7
            text-gray-500
            md:text-base
          "
        >
          That's the future we're building toward.
        </p>

      </div>
    </section>
  );
};

export default AboutVision;