import React from "react";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
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
              font-medium
              uppercase
              tracking-[0.3em]
              text-emerald-400
            "
          >
            Leo Foundry
          </p>

          <h2
            className="
              mt-7
              max-w-5xl
              text-5xl
              font-light
              leading-[0.92]
              tracking-[-0.07em]
              text-white
              md:text-7xl
              lg:text-8xl
            "
          >
            Have something
            <br />
            worth building?
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
            Whether you're exploring an idea, solving a
            complex business problem, or looking for the
            right technology partner, we'd like to hear
            about it.
          </p>

          <div
            className="
              mt-12
              flex
              flex-wrap
              items-center
              gap-7
            "
          >

            <Link
              to="/contact"
              className="
                group
                inline-flex
                items-center
                gap-4
                border-b
                border-white/[0.15]
                pb-3
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-gray-400
                transition-colors
                duration-300
                hover:border-emerald-400
                hover:text-emerald-400
              "
            >
              Start a conversation

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                "
              />
            </Link>

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
              Explore products

              <ArrowLeft
                size={13}
                strokeWidth={1.5}
                className="
                  rotate-180
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutCTA;