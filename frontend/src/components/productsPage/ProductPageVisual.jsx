import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProductPageVisual = ({ product }) => {
  const visualRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: visualRef,
    offset: ["start end", "end start"],
  });

  const gridY = useTransform(
    scrollYProgress,
    [0, 1],
    [-25, 25]
  );

  return (
    <div
      ref={visualRef}
      className="
        relative
        min-h-[480px]
        overflow-hidden
        border
        border-white/[0.06]
        bg-[#080808]
        md:min-h-[620px]
      "
    >
      {/* Subtle background grid */}

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.25 }}
        transition={{ duration: 1 }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        style={{ y: gridY }}
        className="
          absolute
          -inset-20
          [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

      {/* Product label */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          absolute
          bottom-6
          left-6
          text-[8px]
          uppercase
          tracking-[0.3em]
          text-gray-700
          md:bottom-8
          md:left-8
        "
      >
        {product.category}
      </motion.div>

      {/* Product number */}

      <motion.div
        initial={{
          opacity: 0,
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
          delay: 0.25,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="
          absolute
          bottom-6
          right-6
          text-[8px]
          uppercase
          tracking-[0.3em]
          text-gray-700
          md:bottom-8
          md:right-8
        "
      >
        {product.number}
      </motion.div>

      {/* Temporary visual placeholder */}

      <div className="relative flex min-h-[480px] items-center justify-center md:min-h-[620px]">
        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="
            text-[9px]
            uppercase
            tracking-[0.35em]
            text-gray-700
          "
        >
          Product Experience
        </motion.p>
      </div>
    </div>
  );
};

export default ProductPageVisual;