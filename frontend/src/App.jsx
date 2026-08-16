import React from "react";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import About from "./pages/About";

import {
  Routes,
  Route,
  useLocation,
} from "react-router";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import SmoothScroll from "./components/SmoothScroll";
import Navbar from "./components/Navbar";


/* =========================================
   PAGE INFORMATION
========================================= */

const getPageInfo = (pathname) => {
  if (pathname === "/") {
    return {
      number: "00",
      name: "HOME",
    };
  }

  if (pathname === "/products") {
    return {
      number: "01",
      name: "PRODUCTS",
    };
  }

  if (pathname.startsWith("/products/")) {
    return {
      number: "01",
      name: "PRODUCT DETAIL",
    };
  }

  if (pathname === "/about") {
    return {
      number: "02",
      name: "ABOUT",
    };
  }

  if (pathname === "/contact") {
    return {
      number: "03",
      name: "CONTACT",
    };
  }

  if (pathname === "/services") {
    return {
      number: "04",
      name: "SERVICES",
    };
  }

  return {
    number: "00",
    name: "LEO FOUNDRY",
  };
};


/* =========================================
   ROUTES + TRANSITION
========================================= */

const AnimatedRoutes = () => {
  const location = useLocation();

  const page = getPageInfo(location.pathname);

  return (
    <>
      {/* =====================================
          WEBSITE CONTENT
      ===================================== */}

      <Routes location={location}>
        <Route path="/" element={<Home />} />

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/products/:productId"
          element={<ProductDetail />}
        />

        <Route
          path="/about"
          element={<About />}
        />
      </Routes>


      {/* =====================================
          BRANDED TRANSITION
      ===================================== */}

      <AnimatePresence
        mode="wait"
        initial={false}
      >
        <motion.div
          key={location.pathname}
          className="
            fixed
            inset-0
            z-[9999]
            pointer-events-none
            overflow-hidden
          "

          initial={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}

          animate={{
            clipPath: [
              "polygon(0 0, 100% 0, 100% 100%, 0 100%)",

              "polygon(0 0, 100% 0, 100% 82%, 0 100%)",

              "polygon(0 0, 100% 0, 100% 58%, 0 100%)",

              "polygon(0 0, 100% 0, 100% 32%, 0 82%)",

              "polygon(0 0, 100% 0, 100% 0%, 0 48%)",

              "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
            ],
          }}

          transition={{
            duration: 1.15,

            times: [
              0,
              0.18,
              0.38,
              0.58,
              0.82,
              1,
            ],

            ease: [0.76, 0, 0.24, 1],
          }}
        >

          {/* =================================
              GRAPHITE BASE
          ================================= */}

          <div
            className="
              absolute
              inset-0

              bg-[#111111]
            "
          />


          {/* =================================
              LARGE ATMOSPHERIC GLOW
          ================================= */}

          <motion.div
            className="
              absolute

              -left-[20%]
              -top-[25%]

              h-[80vh]
              w-[80vh]

              rounded-full

              bg-emerald-400/[0.07]

              blur-[120px]
            "

            animate={{
              x: [
                0,
                120,
                40,
                0,
              ],

              y: [
                0,
                60,
                120,
                0,
              ],

              scale: [
                1,
                1.15,
                0.95,
                1,
              ],

              opacity: [
                0.45,
                0.8,
                0.55,
                0.45,
              ],
            }}

            transition={{
              duration: 1.15,
              ease: "easeInOut",
            }}
          />


          {/* =================================
              SECOND LIGHT BLOOM
          ================================= */}

          <motion.div
            className="
              absolute

              -right-[15%]
              bottom-[5%]

              h-[65vh]
              w-[65vh]

              rounded-full

              bg-white/[0.06]

              blur-[130px]
            "

            animate={{
              x: [
                80,
                0,
                -60,
                80,
              ],

              y: [
                50,
                -20,
                20,
                50,
              ],

              scale: [
                0.9,
                1.1,
                1,
                0.9,
              ],
            }}

            transition={{
              duration: 1.15,
              ease: "easeInOut",
            }}
          />


          {/* =================================
              CENTRAL SOFT GLOW
          ================================= */}

          <motion.div
            className="
              absolute

              left-1/2
              top-1/2

              h-[35vh]
              w-[35vh]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-emerald-400/[0.12]

              blur-[100px]
            "

            animate={{
              scale: [
                0.8,
                1.15,
                0.9,
                0.8,
              ],

              opacity: [
                0.2,
                0.7,
                0.35,
                0.2,
              ],
            }}

            transition={{
              duration: 1.15,
              ease: "easeInOut",
            }}
          />


          {/* =================================
              SUBTLE LIGHT STREAK
          ================================= */}

          <motion.div
            className="
              absolute

              left-[-20%]
              top-1/2

              h-px
              w-[140%]

              bg-gradient-to-r
              from-transparent
              via-white/[0.12]
              to-transparent

              blur-[1px]
            "

            animate={{
              x: [
                "-15%",
                "15%",
                "-15%",
              ],

              opacity: [
                0,
                0.7,
                0,
              ],
            }}

            transition={{
              duration: 1.1,
              ease: "easeInOut",
            }}
          />


          {/* =================================
              BRAND
          ================================= */}

          <motion.div
            className="
              absolute

              left-6
              top-6

              md:left-10
              md:top-8

              lg:left-14
              lg:top-10
            "

            initial={{
              opacity: 0,
              y: -15,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p
              className="
                text-[9px]
                font-medium
                tracking-[0.3em]
                text-white/60
              "
            >
              LEO FOUNDRY
            </p>
          </motion.div>


          {/* =================================
              CENTER MESSAGE
          ================================= */}

          <div
            className="
              absolute
              inset-0

              flex
              items-center
              justify-center

              px-6
            "
          >
            <div className="text-center">

              <motion.p
                initial={{
                  opacity: 0,
                  y: 15,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.6,
                  delay: 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}

                className="
                  text-[9px]
                  uppercase
                  tracking-[0.35em]
                  text-emerald-400
                "
              >
                {page.number} / {page.name}
              </motion.p>


              <motion.h2
                initial={{
                  opacity: 0,
                  y: 35,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.8,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}

                className="
                  mt-5

                  max-w-[90vw]

                  text-4xl
                  font-light
                  leading-[0.9]
                  tracking-[-0.06em]

                  text-white

                  md:text-6xl
                  lg:text-8xl
                "
              >
                BUILDING
                <br />
                WHAT'S NEXT
              </motion.h2>


              <motion.p
                initial={{
                  opacity: 0,
                }}

                animate={{
                  opacity: 1,
                }}

                transition={{
                  duration: 0.6,
                  delay: 0.45,
                }}

                className="
                  mt-7

                  text-[9px]
                  uppercase
                  tracking-[0.3em]

                  text-white/30
                "
              >
                {page.name}
              </motion.p>

            </div>
          </div>


          {/* =================================
              PAGE NUMBER
          ================================= */}

          <motion.div
            className="
              absolute

              bottom-6
              right-6

              md:bottom-8
              md:right-10

              lg:bottom-10
              lg:right-14
            "

            initial={{
              opacity: 0,
              y: 15,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
          >
            <p
              className="
                text-[9px]
                tracking-[0.3em]
                text-white/30
              "
            >
              {page.number}
            </p>
          </motion.div>


          {/* =================================
              REVEAL EDGE
          ================================= */}

          <motion.div
            className="
              absolute

              bottom-0
              left-0

              h-px
              w-full

              bg-white/20
            "

            animate={{
              opacity: [
                0,
                0.8,
                0,
              ],
            }}

            transition={{
              duration: 0.9,
              ease: "easeInOut",
            }}
          />

        </motion.div>
      </AnimatePresence>
    </>
  );
};


/* =========================================
   APP
========================================= */

const App = () => {
  return (
    <>
      <SmoothScroll />

      {/* Global navbar */}
      <Navbar />

      {/* Pages + transition */}
      <AnimatedRoutes />
    </>
  );
};


export default App;