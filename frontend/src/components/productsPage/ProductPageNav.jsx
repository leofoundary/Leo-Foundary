import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const ProductPageNav = ({ products }) => {
  const [activeProduct, setActiveProduct] = useState(
    products[0]?.id
  );

  const scrollToProduct = (id) => {
    const element = document.getElementById(id);

    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(
      null,
      "",
      `/products#${id}`
    );
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      "/products"
    );
  };

  useEffect(() => {
    const sections = products
      .map((product) =>
        document.getElementById(product.id)
      )
      .filter(Boolean);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio -
              a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveProduct(
            visibleSections[0].target.id
          );
        }
      },
      {
        rootMargin: "-25% 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, [products]);

  return (
    <motion.nav
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        sticky
        top-0
        z-40
        border-y
        border-white/[0.06]
        bg-[#050505]/90
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-[1600px]
          items-center
          gap-4
          px-5
          py-4
          md:px-8
          lg:px-12
        "
      >

        {/* HOME */}

        <Link
          to="/"
          className="
            group
            flex
            shrink-0
            items-center
            gap-2.5
            border-r
            border-white/[0.08]
            pr-5
            text-[9px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-gray-500
            transition-colors
            duration-300
            hover:text-emerald-400
            md:pr-7
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

          Home
        </Link>

        {/* PRODUCTS LABEL */}

        <div
          className="
            hidden
            shrink-0
            items-center
            gap-2
            border-r
            border-white/[0.08]
            pr-5
            text-[9px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-gray-400
            sm:flex
            md:pr-7
          "
        >
          <span className="h-1 w-1 rounded-full bg-emerald-400" />

          Products
        </div>

        {/* PRODUCT NAVIGATION */}

        <div
          className="
            flex
            min-w-0
            flex-1
            items-center
            justify-start
            gap-2
            overflow-x-auto
            scrollbar-none
            md:justify-center
            md:gap-3
          "
        >
          {products.map((product, index) => {
            const isActive =
              activeProduct === product.id;

            return (
              <motion.button
                key={product.id}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.6 + index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                onClick={() =>
                  scrollToProduct(product.id)
                }
                className={`
                  group
                  relative
                  shrink-0
                  rounded-full
                  border
                  px-4
                  py-2.5
                  text-[9px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  transition-all
                  duration-500
                  md:px-5
                  md:py-3
                  md:text-[10px]

                  ${
                    isActive
                      ? `
                        border-emerald-400/30
                        bg-emerald-400/[0.06]
                        text-emerald-400
                      `
                      : `
                        border-white/[0.07]
                        text-gray-500
                        hover:border-emerald-400/30
                        hover:bg-emerald-400/[0.04]
                        hover:text-emerald-400
                      `
                  }
                `}
              >
                {/* ACTIVE INDICATOR */}

                <motion.span
                  animate={{
                    scale: isActive ? 1 : 0,
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="
                    absolute
                    -bottom-[1px]
                    left-1/2
                    h-[2px]
                    w-5
                    -translate-x-1/2
                    rounded-full
                    bg-emerald-400
                  "
                />

                <span
                  className={`
                    mr-2
                    ${
                      isActive
                        ? "text-emerald-400/60"
                        : "text-gray-700"
                    }
                  `}
                >
                  {product.number}
                </span>

                {product.title}
              </motion.button>
            );
          })}
        </div>

        {/* TOP */}

        <button
          onClick={scrollToTop}
          className="
            group
            hidden
            shrink-0
            items-center
            gap-2
            border-l
            border-white/[0.08]
            pl-5
            text-[9px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-gray-600
            transition-colors
            duration-300
            hover:text-emerald-400
            md:flex
            md:pl-7
          "
        >
          Top

          <ArrowUp
            size={13}
            strokeWidth={1.5}
            className="
              transition-transform
              duration-300
              group-hover:-translate-y-1
            "
          />
        </button>

      </div>
    </motion.nav>
  );
};

export default ProductPageNav;