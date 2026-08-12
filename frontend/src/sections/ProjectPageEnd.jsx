import React from "react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ProductPageEnd = () => {
  const products = [
    "LeoAI",
    "FlowOS",
    "LeoCRM",
    "LeoERP",
    "LeoDesk",
    "LeoAnalytics",
  ];

  return (
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

        <div
          className="
            overflow-hidden
            border
            border-white/[0.08]
            px-8
            py-14
            md:px-14
            md:py-20
            lg:px-20
            lg:py-24
          "
        >
          <div
            className="
              grid
              items-center
              gap-16
              lg:grid-cols-[1.15fr_0.85fr]
              lg:gap-20
            "
          >

            {/* LEFT */}

            <div>

              <p
                className="
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.3em]
                  text-emerald-400
                "
              >
                Explore the ecosystem
              </p>

              <h2
                className="
                  mt-7
                  max-w-4xl
                  text-5xl
                  font-light
                  leading-[0.92]
                  tracking-[-0.07em]
                  text-white
                  md:text-7xl
                  lg:text-8xl
                "
              >
                Six ideas.
                <br />
                One direction.
              </h2>

              <p
                className="
                  mt-8
                  max-w-xl
                  text-sm
                  font-light
                  leading-7
                  text-gray-500
                  md:text-base
                "
              >
                We're building a connected ecosystem of
                products designed to make modern businesses
                more intelligent, more efficient, and easier
                to operate.
              </p>

              {/* ACTIONS */}

              <div
                className="
                  mt-12
                  flex
                  flex-wrap
                  items-center
                  gap-6
                "
              >
                <Link
                  to="/"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-gray-500
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

                  Back to home
                </Link>

                <Link
                  to="/contact"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-3
                    border-b
                    border-white/[0.15]
                    pb-3
                    text-[9px]
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
                  Talk to us

                  <ArrowUpRight
                    size={13}
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

            {/* RIGHT — ECOSYSTEM VISUAL */}

            <div
              className="
                relative
                flex
                min-h-[340px]
                items-center
                justify-center
                overflow-hidden
                border
                border-white/[0.05]
                bg-white/[0.012]
                lg:min-h-[400px]
              "
            >

              {/* subtle grid */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-40
                  [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)]
                  [background-size:55px_55px]
                "
              />

              {/* central glow */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-40
                  w-40
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-full
                  bg-emerald-400/[0.04]
                  blur-3xl
                "
              />

              {/* CENTER */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-emerald-400/20
                  bg-[#080808]
                  shadow-[0_0_60px_rgba(16,185,129,0.08)]
                "
              >
                <span
                  className="
                    text-[9px]
                    font-medium
                    uppercase
                    tracking-[0.25em]
                    text-emerald-400
                  "
                >
                  LEO
                </span>
              </div>

              {/* CONNECTING LINES */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[1px]
                  w-[72%]
                  -translate-x-1/2
                  bg-gradient-to-r
                  from-transparent
                  via-emerald-400/20
                  to-transparent
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[72%]
                  w-[1px]
                  -translate-x-1/2
                  -translate-y-1/2
                  bg-gradient-to-b
                  from-transparent
                  via-emerald-400/20
                  to-transparent
                "
              />

              {/* PRODUCT NODES */}

              <div
                className="
                  absolute
                  inset-6
                  md:inset-10
                "
              >
                {products.map((product, index) => {
                  const positions = [
                    "left-0 top-0",
                    "right-0 top-0",
                    "left-0 bottom-0",
                    "right-0 bottom-0",
                    "left-1/2 top-0 -translate-x-1/2",
                    "bottom-0 left-1/2 -translate-x-1/2",
                  ];

                  return (
                    <div
                      key={product}
                      className={`
                        absolute
                        ${positions[index]}
                        flex
                        items-center
                        gap-2
                      `}
                    >
                      <span
                        className="
                          h-1.5
                          w-1.5
                          shrink-0
                          rounded-full
                          bg-emerald-400/60
                          shadow-[0_0_12px_rgba(16,185,129,0.35)]
                        "
                      />

                      <span
                        className="
                          whitespace-nowrap
                          text-[8px]
                          uppercase
                          tracking-[0.18em]
                          text-gray-600
                        "
                      >
                        {product}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* LABEL */}

              <div
                className="
                  absolute
                  bottom-5
                  left-1/2
                  -translate-x-1/2
                  text-[7px]
                  uppercase
                  tracking-[0.3em]
                  text-gray-700
                "
              >
                Connected ecosystem
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPageEnd;