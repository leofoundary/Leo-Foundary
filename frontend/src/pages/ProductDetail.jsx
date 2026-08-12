import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { products } from "../data/products";
import ProductPageVisual from "../components/productsPage/ProductPageVisual";
import HomeBackground from "../components/HomeBackground";

const ProductDetail = () => {
  const { productId } = useParams();

  const product = products.find(
    (item) => item.id === productId
  );

  if (!product) {
    return (
      <main className="relative min-h-screen text-white">
        <HomeBackground />

        <div className="relative z-10 px-6 py-40">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm text-gray-500">
              Product not found.
            </p>

            <Link
              to="/products"
              className="
                mt-8
                inline-flex
                text-sm
                text-emerald-400
                transition-colors
                hover:text-emerald-300
              "
            >
              Back to products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen text-white">
      {/* SAME BACKGROUND AS HOME */}

      <HomeBackground />

      {/* PAGE CONTENT */}

      <div className="relative z-10">

        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="
            px-6
            pb-24
            pt-32
            md:px-10
            md:pb-32
            md:pt-44
            lg:px-14
          "
        >
          <div className="mx-auto max-w-[1500px]">

            <Link
              to="/products"
              className="
                group
                inline-flex
                items-center
                gap-3
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-gray-600
                transition-colors
                duration-300
                hover:text-emerald-400
              "
            >
              <ArrowLeft
                size={13}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-x-1
                "
              />

              All products
            </Link>

            <div className="mt-20">

              {/* CATEGORY */}

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
                  duration: 0.6,
                }}
                className="
                  text-[10px]
                  font-medium
                  tracking-[0.3em]
                  text-emerald-400
                "
              >
                {product.number} · {product.category}
              </motion.p>

              {/* TITLE */}

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
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-7
                  text-7xl
                  font-light
                  leading-[0.85]
                  tracking-[-0.08em]
                  md:text-9xl
                  lg:text-[12vw]
                "
              >
                {product.title}
              </motion.h1>

              {/* TAGLINE */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                }}
                className="
                  mt-10
                  max-w-3xl
                  text-2xl
                  font-light
                  leading-tight
                  tracking-[-0.04em]
                  text-gray-300
                  md:text-4xl
                "
              >
                {product.tagline}
              </motion.p>

            </div>
          </div>
        </section>

        {/* =====================================================
            PRODUCT VISUAL
        ===================================================== */}

        <section
          className="
            px-6
            md:px-10
            lg:px-14
          "
        >
          <div className="mx-auto max-w-[1500px]">
            <ProductPageVisual product={product} />
          </div>
        </section>

        {/* =====================================================
            THE IDEA
        ===================================================== */}

        <section
          className="
            px-6
            py-32
            md:px-10
            md:py-44
            lg:px-14
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1200px]
              gap-20
              md:grid-cols-2
            "
          >

            <div>
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-emerald-400
                "
              >
                The idea
              </p>

              <h2
                className="
                  mt-6
                  text-4xl
                  font-light
                  tracking-[-0.05em]
                  text-white
                  md:text-6xl
                "
              >
                {product.overview}
              </h2>
            </div>

            <div className="self-end">
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-gray-700
                "
              >
                Why it matters
              </p>

              <p
                className="
                  mt-6
                  text-base
                  font-light
                  leading-8
                  text-gray-500
                "
              >
                Modern businesses generate more information,
                more processes, and more decisions every day.
                The goal of {product.title} is to make that
                complexity easier to understand and easier
                to act on.
              </p>
            </div>

          </div>
        </section>

        {/* =====================================================
            CAPABILITIES
        ===================================================== */}

        <section
          className="
            border-y
            border-white/[0.06]
            px-6
            py-28
            md:px-10
            md:py-36
            lg:px-14
          "
        >
          <div className="mx-auto max-w-[1500px]">

            <div className="mb-16">
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-emerald-400
                "
              >
                Core capabilities
              </p>

              <h2
                className="
                  mt-5
                  text-5xl
                  font-light
                  tracking-[-0.06em]
                  md:text-7xl
                "
              >
                Built around the work.
              </h2>
            </div>

            <div
              className="
                grid
                gap-px
                border
                border-white/[0.06]
                md:grid-cols-3
              "
            >
              {product.capabilities.map(
                (capability, index) => (
                  <motion.div
                    key={capability.title}
                    initial={{
                      opacity: 0,
                      y: 30,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.08,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    className="
                      min-h-[280px]
                      bg-white/[0.012]
                      p-8
                      transition-colors
                      duration-500
                      hover:bg-emerald-400/[0.025]
                      md:p-10
                      lg:p-12
                    "
                  >
                    <span
                      className="
                        text-[9px]
                        text-gray-700
                      "
                    >
                      0{index + 1}
                    </span>

                    <h3
                      className="
                        mt-16
                        text-xl
                        font-light
                        tracking-[-0.03em]
                        text-white
                      "
                    >
                      {capability.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-xs
                        text-sm
                        font-light
                        leading-7
                        text-gray-500
                      "
                    >
                      {capability.description}
                    </p>
                  </motion.div>
                )
              )}
            </div>

          </div>
        </section>

        {/* =====================================================
            AUDIENCE
        ===================================================== */}

        <section
          className="
            px-6
            py-32
            md:px-10
            md:py-44
            lg:px-14
          "
        >
          <div className="mx-auto max-w-[1500px]">

            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-gray-700
              "
            >
              Built for
            </p>

            <h2
              className="
                mt-8
                max-w-5xl
                text-5xl
                font-light
                leading-[0.95]
                tracking-[-0.06em]
                text-white
                md:text-7xl
                lg:text-8xl
              "
            >
              {product.audience}
            </h2>

          </div>
        </section>

        {/* =====================================================
            CTA
        ===================================================== */}

        <section
          className="
            px-6
            pb-32
            md:px-10
            md:pb-44
            lg:px-14
          "
        >
          <div className="mx-auto max-w-[1500px]">

            <div
              className="
                border
                border-white/[0.08]
                bg-white/[0.012]
                p-10
                md:p-16
                lg:p-24
              "
            >
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-emerald-400
                "
              >
                {product.title}
              </p>

              <h2
                className="
                  mt-6
                  max-w-4xl
                  text-5xl
                  font-light
                  leading-[0.95]
                  tracking-[-0.06em]
                  md:text-7xl
                "
              >
                Explore the idea behind{" "}
                {product.title}.
              </h2>

              <Link
                to="/contact"
                className="
                  group
                  mt-12
                  inline-flex
                  items-center
                  gap-4
                  border-b
                  border-white/[0.15]
                  pb-3
                  text-[10px]
                  uppercase
                  tracking-[0.25em]
                  text-gray-400
                  transition-colors
                  duration-300
                  hover:border-emerald-400
                  hover:text-emerald-400
                "
              >
                Talk to us

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
              </Link>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
};

export default ProductDetail;