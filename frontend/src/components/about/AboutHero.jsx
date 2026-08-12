import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section
      className="
        relative
        min-h-[90vh]
        overflow-hidden
        px-6
        md:px-10
        lg:px-14
      "
    >
      {/* =====================================================
          GIANT BACKGROUND TYPOGRAPHY
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.4,
          ease: "easeOut",
        }}
        className="
          pointer-events-none
          absolute
          inset-0
          flex
          items-center
          overflow-hidden
        "
      >
        <motion.div
          initial={{ x: "4%" }}
          animate={{ x: "-4%" }}
          transition={{
            duration: 18,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="
            whitespace-nowrap
            text-[34vw]
            font-light
            leading-none
            tracking-[-0.12em]
            text-white/[0.025]
            select-none
          "
        >
          ABOUT
        </motion.div>
      </motion.div>

      {/* =====================================================
          SUBTLE CENTER GLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[35vw]
          w-[35vw]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-400/[0.025]
          blur-[120px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[90vh]
          max-w-[1500px]
          flex-col
          justify-end
          pb-20
          pt-40
          md:pb-24
          lg:pb-28
        "
      >

        {/* TOP LABEL */}

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.35em]
            text-emerald-400
          "
        >
          Leo Foundry
        </motion.p>

        {/* MAIN HEADING */}

        <motion.h1
          initial={{
            opacity: 0,
            y: 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-7
            max-w-6xl
            text-5xl
            font-light
            leading-[0.92]
            tracking-[-0.07em]
            text-white
            md:text-7xl
            lg:text-[7.5vw]
          "
        >
          We build the systems
          <br />
          behind better ways
          <br />
          of working.
        </motion.h1>

        {/* BOTTOM CONTENT */}

        <div
          className="
            mt-12
            grid
            gap-10
            md:grid-cols-[1fr_auto]
            md:items-end
          "
        >

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.55,
            }}
            className="
              max-w-xl
              text-sm
              font-light
              leading-7
              text-gray-500
              md:text-base
            "
          >
            Leo Foundry is a product studio focused on
            intelligent software, automation, and connected
            business systems.
          </motion.p>

          {/* SCROLL INDICATOR */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.8,
            }}
            className="
              flex
              items-center
              gap-4
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-gray-700
            "
          >
            <span>Scroll to explore</span>

            <motion.span
              animate={{
                y: [0, 5, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-emerald-400"
            >
              ↓
            </motion.span>
          </motion.div>

        </div>
      </div>

      {/* =====================================================
          BOTTOM FADE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-32
          bg-gradient-to-t
          from-black
          to-transparent
        "
      />
    </section>
  );
};

export default AboutHero;