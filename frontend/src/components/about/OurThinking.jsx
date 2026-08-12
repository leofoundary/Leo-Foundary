import React from "react";
import { motion } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Make complexity disappear.",
    description:
      "Good software shouldn't expose the complexity behind the work. It should make the work feel simpler.",
  },
  {
    number: "02",
    title: "Automate with purpose.",
    description:
      "Automation isn't about removing people from the process. It's about removing the work that shouldn't require them.",
  },
  {
    number: "03",
    title: "Design for the whole system.",
    description:
      "Businesses are connected systems. Products should understand those connections instead of creating more silos.",
  },
  {
    number: "04",
    title: "Let intelligence stay useful.",
    description:
      "AI should help people understand, decide, and act—not become another layer of unnecessary complexity.",
  },
];

const OurThinking = () => {
  return (
    <section
      className="
        border-y
        border-white/[0.06]
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
            gap-10
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
            Our thinking
          </p>

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
            Principles before features.
            Always.
          </h2>
        </div>

        {/* PRINCIPLES */}

        <div className="mt-24">

          {principles.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{
                opacity: 0,
                y: 25,
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
                grid
                gap-8
                border-t
                border-white/[0.06]
                py-10
                md:grid-cols-[100px_1fr_1fr]
                md:items-start
                md:py-14
              "
            >
              <span
                className="
                  text-[9px]
                  tracking-[0.2em]
                  text-gray-700
                "
              >
                {item.number}
              </span>

              <h3
                className="
                  max-w-xl
                  text-2xl
                  font-light
                  leading-tight
                  tracking-[-0.04em]
                  text-white
                  md:text-3xl
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  max-w-md
                  text-sm
                  font-light
                  leading-7
                  text-gray-500
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurThinking;