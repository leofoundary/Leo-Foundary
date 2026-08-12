import React from "react";
import { motion } from "framer-motion";

const TheFoundry = () => {
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

        {/* HEADER */}

        <div
          className="
            grid
            gap-12
            lg:grid-cols-[0.7fr_1.8fr]
          "
        >
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
              The Foundry
            </p>
          </div>

          <div>
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
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              className="
                max-w-6xl
                text-4xl
                font-light
                leading-[0.95]
                tracking-[-0.06em]
                text-white
                md:text-6xl
                lg:text-7xl
              "
            >
              We don't just build software.
              We build better ways for people
              and businesses to work.
            </motion.h2>
          </div>
        </div>

        {/* DIVIDER */}

        <div className="mt-24 h-px bg-white/[0.06]" />

        {/* CONTENT */}

        <div
          className="
            mt-16
            grid
            gap-16
            md:grid-cols-3
          "
        >
          <div>
            <span className="text-[9px] text-gray-700">
              01
            </span>

            <h3
              className="
                mt-8
                text-xl
                font-light
                tracking-[-0.03em]
                text-white
              "
            >
              Product thinking
            </h3>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                font-light
                leading-7
                text-gray-500
              "
            >
              Every product starts with a real problem.
              We focus on understanding the work before
              trying to automate or improve it.
            </p>
          </div>

          <div>
            <span className="text-[9px] text-gray-700">
              02
            </span>

            <h3
              className="
                mt-8
                text-xl
                font-light
                tracking-[-0.03em]
                text-white
              "
            >
              Connected systems
            </h3>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                font-light
                leading-7
                text-gray-500
              "
            >
              The best tools don't operate in isolation.
              Our products are designed to work together,
              sharing context and reducing unnecessary
              complexity.
            </p>
          </div>

          <div>
            <span className="text-[9px] text-gray-700">
              03
            </span>

            <h3
              className="
                mt-8
                text-xl
                font-light
                tracking-[-0.03em]
                text-white
              "
            >
              Intelligence by design
            </h3>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                font-light
                leading-7
                text-gray-500
              "
            >
              AI shouldn't make software harder to use.
              It should quietly remove friction, surface
              useful information, and help people make
              better decisions.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TheFoundry;