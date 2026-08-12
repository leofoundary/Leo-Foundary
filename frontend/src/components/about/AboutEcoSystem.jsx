import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const products = [
  {
    name: "LeoAI",
    type: "AI PLATFORM",
  },
  {
    name: "FlowOS",
    type: "AUTOMATION",
  },
  {
    name: "LeoCRM",
    type: "CRM",
  },
  {
    name: "LeoERP",
    type: "BUSINESS MANAGEMENT",
  },
  {
    name: "LeoDesk",
    type: "CUSTOMER SUPPORT",
  },
  {
    name: "LeoAnalytics",
    type: "ANALYTICS",
  },
];

const AboutEcosystem = () => {
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
            The ecosystem
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
              Six products.
              One connected idea.
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
              Each product solves a different part of
              modern business. Together, they form a
              connected ecosystem designed to work as
              one.
            </p>
          </div>
        </div>

        {/* PRODUCT LIST */}

        <div className="mt-20">

          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{
                opacity: 0,
                x: -20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
            >
              <Link
                to={`/products#${product.name
                  .toLowerCase()
                  .replace("leoanalytics", "leo-analytics")
                  .replace("leocrm", "leo-crm")
                  .replace("leoerp", "leo-erp")
                  .replace("leodesk", "leo-desk")
                  .replace("leoai", "leo-ai")
                  .replace("flowos", "flow-os")}`}
                className="
                  group
                  grid
                  grid-cols-[50px_1fr_auto]
                  items-center
                  gap-6
                  border-t
                  border-white/[0.06]
                  py-7
                  transition-colors
                  duration-300
                  hover:border-emerald-400/20
                  md:grid-cols-[80px_1fr_auto]
                  md:py-9
                "
              >
                <span
                  className="
                    text-[9px]
                    tracking-[0.2em]
                    text-gray-700
                  "
                >
                  0{index + 1}
                </span>

                <div>
                  <h3
                    className="
                      text-xl
                      font-light
                      tracking-[-0.03em]
                      text-gray-300
                      transition-colors
                      duration-300
                      group-hover:text-white
                      md:text-2xl
                    "
                  >
                    {product.name}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[8px]
                      uppercase
                      tracking-[0.2em]
                      text-gray-700
                    "
                  >
                    {product.type}
                  </p>
                </div>

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="
                    text-gray-700
                    transition-all
                    duration-300
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                    group-hover:text-emerald-400
                  "
                />
              </Link>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AboutEcosystem;