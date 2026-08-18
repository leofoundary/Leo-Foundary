import React from "react";
import { ArrowUpRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        w-full
        overflow-hidden
        bg-[#050505]
        px-5
        pb-6
        pt-16
        text-white

        sm:px-6
        sm:pt-20
        sm:pb-8

        md:px-10

        lg:px-14
      "
    >

      {/* =========================================
          BACKGROUND GLOW
      ========================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-32
          left-1/2
          h-[280px]
          w-[420px]
          -translate-x-1/2
          rounded-full
          bg-emerald-400/[0.025]
          blur-[100px]

          sm:-bottom-40
          sm:h-[350px]
          sm:w-[600px]
          sm:blur-[130px]

          md:h-[400px]
          md:w-[700px]
          md:blur-[150px]
        "
      />
    

      {/* =========================================
          MAIN CONTAINER
      ========================================= */}

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-[1500px]
        "
      >

        {/* =======================================
            TOP SECTION
        ======================================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            border-b
            border-white/10
            pb-12

            sm:gap-14
            sm:pb-14

            md:grid-cols-2
            md:gap-16
            md:pb-16

            lg:grid-cols-[1.5fr_1fr_1fr_1fr]
          "
        >

          {/* =====================================
              BRAND
          ===================================== */}

          <div className="min-w-0">

            <a
              href="/"
              className="
                inline-block
                text-xl
                font-bold
                tracking-[-0.05em]
                text-white
                transition-colors
                duration-300
                hover:text-emerald-400

                sm:text-2xl
              "
            >
              LEO
              <span className="text-emerald-400">
                FOUNDARY
              </span>
            </a>


            <p
              className="
                mt-5
                max-w-[320px]
                text-[13px]
                font-light
                leading-6
                text-gray-500

                sm:mt-6
                sm:text-sm
                sm:leading-7
              "
            >
              We turn ambitious ideas into digital
              products, experiences, and systems
              built for what's next.
            </p>


            <a
              href="mailto:leofoundary@gmail.com"
              className="
                group
                mt-6
                inline-flex
                max-w-full
                items-center
                gap-2
                break-all
                text-[13px]
                text-gray-300
                transition-colors
                duration-300
                hover:text-emerald-400

                sm:mt-8
                sm:text-sm
              "
            >
              leofoundary@gmail.com

              <ArrowUpRight
                size={14}
                strokeWidth={1.5}
                className="
                  shrink-0
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>

          </div>


          {/* =====================================
              EXPLORE
          ===================================== */}

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


           <nav
              className="
                mt-5
                flex
                flex-col
                gap-3.5

                sm:mt-6
                sm:gap-4
              "
            >

              <a
                href="/"
                className="
                  w-fit
                  text-[13px]
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white

                  sm:text-sm
                "
              >
                Home
              </a>


              <a
                href="/products"
                className="
                  w-fit
                  text-[13px]
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white

                  sm:text-sm
                "
              >
                Products
              </a>


              <a
                href="/contact"
                className="
                  w-fit
                  text-[13px]
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white

                  sm:text-sm
                "
              >
                Contact Us
              </a>


              <a
                href="/about"
                className="
                  w-fit
                  text-[13px]
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white

                  sm:text-sm
                "
              >
                About
              </a>

            </nav>


          </div>


          {/* =====================================
              CONNECT
          ===================================== */}

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


            <div
              className="
                mt-5
                flex
                flex-col
                gap-3.5

                sm:mt-6
                sm:gap-4
              "
            >

              {/* Instagram */}

              <a
                href="https://github.com/leofoundary"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-[13px]
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white

                  sm:text-sm
                "
              >
                GitHub

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.5}
                  className="
                    hidden
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100

                    sm:block
                  "
                />
              </a>


              {/* LinkedIn */}

              {/* <a
                href="#"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-[13px]
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white

                  sm:text-sm
                "
              >
                LinkedIn

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.5}
                  className="
                    hidden
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100

                    sm:block
                  "
                />
              </a> */}


              {/* X */}

              <a
                href="https://x.com/leofoundary"
                className="
                  group
                  flex
                  w-fit
                  items-center
                  gap-3
                  text-[13px]
                  font-light
                  text-gray-500
                  transition-colors
                  duration-300
                  hover:text-white

                  sm:text-sm
                "
              >
                X / Twitter

                <ArrowUpRight
                  size={12}
                  strokeWidth={1.5}
                  className="
                    hidden
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                    group-hover:opacity-100

                    sm:block
                  "
                />
              </a>

            </div>

          </div>


          {/* =====================================
              START SOMETHING
          ===================================== */}

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
              href="/contact"
              className="
                group
                mt-5
                flex
                w-fit
                items-center
                gap-3
                text-base
                font-light
                text-white
                transition-colors
                duration-300
                hover:text-emerald-400

                sm:mt-6
                sm:text-lg
              "
            >
              Let's talk

              <span
                className="
                  flex
                  h-8
                  w-8
                  shrink-0
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


        {/* =======================================
            BOTTOM SECTION
        ======================================= */}

        <div
          className="
            flex
            flex-col
            gap-4
            pt-6
            text-[8px]
            uppercase
            tracking-[0.18em]
            text-gray-700

            sm:gap-5
            sm:pt-7

            md:flex-row
            md:items-center
            md:justify-between
          "
        >

          {/* Copyright */}

          <p className="leading-5">
            © {currentYear} LeoFoundary.
            <span className="hidden sm:inline">
              {" "}All rights reserved.
            </span>
          </p>


          {/* Privacy / Terms */}

          <div
            className="
              flex
              items-center
              gap-5

              sm:gap-6
            "
          >

            <a
              href="#"
              className="
                transition-colors
                duration-300
                hover:text-gray-400
              "
            >
              Privacy
            </a>

            <a
              href="#"
              className="
                transition-colors
                duration-300
                hover:text-gray-400
              "
            >
              Terms
            </a>

          </div>


          {/* Tagline */}

          <p
            className="
              hidden
              text-gray-800

              md:block
            "
          >
            Built for what's next.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;