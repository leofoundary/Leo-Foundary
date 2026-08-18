import React from "react";
import { motion } from "framer-motion";

const ContactBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* =========================================
          SOFT CENTRAL GLOW
      ========================================= */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-1/2
          top-[12%]
          -translate-x-1/2
          h-[420px]
          w-[420px]
          rounded-full
          bg-emerald-400/[0.035]
          blur-[130px]
          md:h-[550px]
          md:w-[550px]
        "
      />

      {/* =========================================
          BACKGROUND WORD
      ========================================= */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.4,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-1/2
          top-[9%]
          -translate-x-1/2
          select-none
          whitespace-nowrap

          text-[24vw]
          font-extrabold
          leading-none
          tracking-[-0.09em]

          text-white/[0.025]

          md:text-[20vw]
          lg:text-[17vw]
        "
      >
        CONTACT
      </motion.div>

      {/* =========================================
          LEFT STRUCTURE
      ========================================= */}

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          -left-40
          top-44
          h-[280px]
          w-[520px]
          rotate-[24deg]
          border-t
          border-white/[0.045]
        "
      >
        <span
          className="
            absolute
            left-[35%]
            -top-[3px]
            h-1.5
            w-1.5
            rounded-full
            bg-emerald-400/30
          "
        />

        <span
          className="
            absolute
            right-[15%]
            -top-[3px]
            h-1.5
            w-1.5
            rounded-full
            bg-emerald-400/20
          "
        />
      </motion.div>

      {/* =========================================
          RIGHT STRUCTURE
      ========================================= */}

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 1.2,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          -right-40
          top-52
          h-[280px]
          w-[520px]
          -rotate-[24deg]
          border-t
          border-white/[0.045]
        "
      >
        <span
          className="
            absolute
            left-[35%]
            -top-[3px]
            h-1.5
            w-1.5
            rounded-full
            bg-emerald-400/30
          "
        />

        <span
          className="
            absolute
            right-[15%]
            -top-[3px]
            h-1.5
            w-1.5
            rounded-full
            bg-emerald-400/20
          "
        />
      </motion.div>

      {/* =========================================
          SUBTLE CENTER LINE
      ========================================= */}

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{
          duration: 1.4,
          delay: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-1/2
          top-[42%]
          h-px
          w-[70vw]
          max-w-[1000px]
          -translate-x-1/2
          origin-center
          bg-gradient-to-r
          from-transparent
          via-emerald-400/[0.08]
          to-transparent
        "
      />

    </div>
  );
};

export default ContactBackground;
