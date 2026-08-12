import React from "react";
import { motion } from "framer-motion";

const ProductPageHero = () => {
  return (
    <section className="px-6 pb-24 pt-36 md:px-10 md:pb-32 md:pt-44 lg:px-14">
      <div className="mx-auto max-w-[1500px] text-center">

        {/* Label */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.4em]
            text-emerald-400
          "
        >
          Our Products
        </motion.p>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-7
            max-w-5xl
            text-6xl
            font-light
            leading-[0.9]
            tracking-[-0.07em]
            text-white
            md:text-8xl
            lg:text-[9vw]
          "
        >
          Tools for a
          <span className="font-bold text-emerald-400">
            {" "}
            smarter
          </span>
          <br />
          way of working.
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-sm
            font-light
            leading-7
            text-gray-500
            md:text-base
          "
        >
          A growing collection of intelligent products
          designed to help people and businesses work,
          automate, understand, and operate better.
        </motion.p>
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
    delay: 0.65,
  }}
  className="
    mt-8
    text-[9px]
    uppercase
    tracking-[0.3em]
    text-gray-600
  "
>
  Six product concepts. One connected ecosystem.
</motion.p>

      </div>
    </section>
  );
};

export default ProductPageHero;