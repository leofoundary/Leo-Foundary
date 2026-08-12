import React from "react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-[#050505] px-6 pb-8 pt-20 text-white md:px-10 lg:px-14">
      {/* Subtle background glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-1/2
          h-[400px]
          w-[700px]
          -translate-x-1/2
          rounded-full
          bg-emerald-400/[0.025]
          blur-[150px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1500px]">

        {/* TOP SECTION */}
        <div className="grid gap-16 border-b border-white/10 pb-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">

          {/* BRAND */}
          <div>
            <a
              href="/"
              className="
                inline-block
                text-2xl
                font-bold
                tracking-[-0.05em]
                text-white
                transition-colors
                duration-300
                hover:text-emerald-400
              "
            >
              LEO
              <span className="text-emerald-400">
                FOUNDARY
              </span>
            </a>

            <p
              className="
                mt-6
                max-w-[320px]
                text-sm
                font-light
                leading-7
                text-gray-500
              "
            >
              We turn ambitious ideas into digital
              products, experiences, and systems
              built for what's next.
            </p>

            <a
              href="mailto:hello@leofoundary.com"
              className="
                group
                mt-8
                inline-flex
                items-center
                gap-2
                text-sm
                text-gray-300
                transition-colors
                duration-300
                hover:text-emerald-400
              "
            >
              hello@leofoundary.com

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>

          {/* EXPLORE */}
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
              Explore
            </p>

            <nav className="mt-6 flex flex-col gap-4">

              <a
                href="/"
                className="
                  w-fit
                  text-sm
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Home
              </a>

              <a
                href="#why-us"
                className="
                  w-fit
                  text-sm
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Why Us
              </a>

              <a
                href="#how-we-work"
                className="
                  w-fit
                  text-sm
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                How We Work
              </a>

              <a
                href="products"
                className="
                  w-fit
                  text-sm
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Products
              </a>

            </nav>
          </div>

          {/* CONNECT */}
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
              Connect
            </p>

            <div className="mt-6 flex flex-col gap-4">

              <a
                href="#"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-sm
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                Instagram

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.5}
                  className="
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </a>

              <a
                href="#"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-sm
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                LinkedIn

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.5}
                  className="
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </a>

              <a
                href="#"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-sm
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white
                "
              >
                X / Twitter

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.5}
                  className="
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100
                  "
                />
              </a>

            </div>
          </div>

          {/* START SOMETHING */}
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
              Start Something
            </p>

            <a
              href="contact"
              className="
                group
                mt-6
                flex
                w-fit
                items-center
                gap-3
                text-lg
                font-light
                text-white
                transition-colors
                duration-300
                hover:text-emerald-400
              "
            >
              Let's talk

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  transition-all
                  duration-300
                  group-hover:border-emerald-400/30
                  group-hover:bg-emerald-400/10
                "
              >
                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </span>
            </a>
          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            flex
            flex-col
            gap-5
            pt-7
            text-[8px]
            uppercase
            tracking-[0.2em]
            text-gray-700
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p>
            © {currentYear} LeoFoundary. All rights reserved.
          </p>

          <div className="flex items-center gap-6">

            <a
              href="#"
              className="transition-colors duration-300 hover:text-gray-400"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-gray-400"
            >
              Terms
            </a>

          </div>

          <p className="text-gray-800">
            Built for what's next.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;