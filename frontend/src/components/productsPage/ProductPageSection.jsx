import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import ProductPageVisual from "./ProductPageVisual";

const ease = [0.22, 1, 0.36, 1];

const ProductPageSection = ({ product, index }) => {
  return (
    <section
      id={product.id}
      className="
        scroll-mt-24
        border-b
        border-white/[0.06]
        px-6
        py-28
        md:px-10
        md:py-36
        lg:px-14
        lg:py-40
      "
    >
      <div className="mx-auto max-w-[1500px]">

        {/* HEADER */}

        <div className="grid gap-12 lg:grid-cols-[0.45fr_2fr] lg:gap-20">

          {/* NUMBER / CATEGORY */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-start gap-5"
          >
            <span className="text-[10px] font-medium tracking-[0.25em] text-emerald-400">
              {product.number}
            </span>

            <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-gray-600">
              {product.category}
            </span>
          </motion.div>

          {/* CONTENT */}

          <div>

            <motion.h2
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.95, ease }}
              viewport={{ once: true, amount: 0.2 }}
              className="
                text-6xl
                font-light
                leading-[0.88]
                tracking-[-0.07em]
                text-white
                md:text-8xl
                lg:text-[9vw]
              "
            >
              {product.title}
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.12,
                ease,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="
                mt-8
                max-w-3xl
                text-2xl
                font-light
                leading-tight
                tracking-[-0.04em]
                text-gray-300
                md:text-3xl
                lg:text-4xl
              "
            >
              {product.tagline}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.75,
                delay: 0.22,
                ease,
              }}
              viewport={{ once: true, amount: 0.2 }}
              className="
                mt-6
                max-w-2xl
                text-sm
                font-light
                leading-7
                text-gray-500
                md:text-base
              "
            >
              {product.overview}
            </motion.p>

            {/* CAPABILITIES */}

            <div className="mt-12 grid gap-3 md:grid-cols-3">
              {product.capabilities.map((capability, capabilityIndex) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.25 + capabilityIndex * 0.08,
                    ease,
                  }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="
                    border
                    border-white/[0.06]
                    bg-white/[0.015]
                    p-5
                    transition-colors
                    duration-500
                    hover:border-emerald-400/20
                    hover:bg-emerald-400/[0.02]
                  "
                >
                  <p className="text-[9px] font-medium tracking-[0.2em] text-emerald-400">
                    {capability.title}
                  </p>

                  <p className="mt-3 text-xs font-light leading-6 text-gray-500">
                    {capability.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* AUDIENCE */}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
              }}
              viewport={{ once: true }}
              className="
                mt-8
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-gray-700
              "
            >
              Built for{" "}
              <span className="text-gray-500">
                {product.audience}
              </span>
            </motion.p>

            {/* TAGS */}

            <div className="mt-7 flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-white/[0.08]
                    px-3
                    py-1.5
                    text-[8px]
                    font-medium
                    tracking-[0.18em]
                    text-gray-500
                  "
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* VISUAL */}

        <motion.div
          initial={{
            opacity: 0,
            y: 70,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 1.1,
            delay: 0.15,
            ease,
          }}
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-20 md:mt-28"
        >
          <ProductPageVisual product={product} />
        </motion.div>

        {/* DEEP DIVE */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-10 flex justify-end"
        >
          <a
            href={`/products/${product.id}`}
            className="
              group
              inline-flex
              items-center
              gap-4
              border-b
              border-white/[0.12]
              pb-3
              text-[10px]
              font-medium
              uppercase
              tracking-[0.25em]
              text-gray-400
              transition-colors
              duration-300
              hover:border-emerald-400/40
              hover:text-emerald-400
            "
          >
            See the full concept

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
                group-hover:-translate-y-1
              "
            />
          </a>
        </motion.div>

        {/* CONTINUE */}

        {index < 5 && (
          <div
            className="
              mt-16
              flex
              justify-end
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-gray-700
            "
          >
            Continue exploring
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductPageSection;