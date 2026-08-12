import React from "react";
import { motion } from "framer-motion";

const disciplines = [
  {
    number: "01",
    title: "AI",
    text: "Intelligence that understands context and helps people move faster.",
  },
  {
    number: "02",
    title: "Automation",
    text: "Systems that handle repetitive work without adding more operational overhead.",
  },
  {
    number: "03",
    title: "Data",
    text: "Information turned into useful signals, insights, and decisions.",
  },
  {
    number: "04",
    title: "Design",
    text: "Interfaces that make powerful systems feel natural and understandable.",
  },
];

const HowWeBuild = () => {
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
            grid
            gap-12
            lg:grid-cols-[0.7fr_1.8fr]
          "
        >

          <p
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-emerald-400
            "
          >
            How we build
          </p>

          <div>
            <h2
              className="
                max-w-5xl
                text-4xl
                font-light
                leading-[0.95]
                tracking-[-0.06em]
                text-white
                md:text-6xl
                lg:text-7xl
              "
            >
              Different disciplines.
              One system.
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
              We bring product design, engineering,
              artificial intelligence, automation, and
              data together from the beginning.
            </p>
          </div>

        </div>

        {/* DISCIPLINES */}

        <div
          className="
            mt-24
            grid
            gap-px
            border
            border-white/[0.06]
            md:grid-cols-2
          "
        >
          {disciplines.map((item, index) => (
            <motion.div
              key={item.number}
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
                group
                min-h-[280px]
                bg-white/[0.012]
                p-8
                transition-colors
                duration-500
                hover:bg-emerald-400/[0.025]
                md:p-12
                lg:min-h-[340px]
              "
            >
              <div className="flex items-start justify-between">
                <span
                  className="
                    text-[9px]
                    tracking-[0.2em]
                    text-gray-700
                  "
                >
                  {item.number}
                </span>

                <span
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.2em]
                    text-gray-700
                    transition-colors
                    duration-300
                    group-hover:text-emerald-400/50
                  "
                >
                  Leo Foundry
                </span>
              </div>

              <h3
                className="
                  mt-20
                  text-3xl
                  font-light
                  tracking-[-0.05em]
                  text-white
                  md:text-4xl
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-5
                  max-w-md
                  text-sm
                  font-light
                  leading-7
                  text-gray-500
                "
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowWeBuild;