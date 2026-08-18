import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import ProductCard from "./ProductCard";

const ProductsMarquee = ({ products }) => {
  const [hoveredProduct, setHoveredProduct] =
    useState(null);

  const trackRef = useRef(null);
  const animationRef = useRef(null);

  const positionRef = useRef(0);
  const lastTimeRef = useRef(null);

  const speed = 100;

  const duplicatedProducts = [
    ...products,
    ...products,
  ];

  useEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    /*
     * Desktop only
     *
     * Mobile uses normal horizontal scrolling.
     */

    const mediaQuery = window.matchMedia(
      "(min-width: 768px)"
    );

    if (!mediaQuery.matches) {
      return;
    }

    const animate = (time) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta =
        time - lastTimeRef.current;

      lastTimeRef.current = time;

      /*
       * Pause movement while hovering
       */

      if (hoveredProduct === null) {
        positionRef.current -=
          (speed * delta) / 1000;
      }

      /*
       * Measure first set of cards
       */

      const children = track.children;

      if (children.length >= products.length) {
        const firstCard = children[0];

        const lastCard =
          children[products.length - 1];

        if (firstCard && lastCard) {
          const firstRect =
            firstCard.getBoundingClientRect();

          const lastRect =
            lastCard.getBoundingClientRect();

          const setWidth =
            lastRect.right -
            firstRect.left;

          if (
            Math.abs(positionRef.current) >=
            setWidth
          ) {
            positionRef.current += setWidth;
          }
        }
      }

      track.style.transform =
        `translate3d(${positionRef.current}px, 0, 0)`;

      animationRef.current =
        requestAnimationFrame(animate);
    };

    animationRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(
          animationRef.current
        );
      }

      lastTimeRef.current = null;
    };
  }, [hoveredProduct, products]);

  return (
    <div className="relative">

      {/* =====================================
          LEFT FADE
          Desktop only
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          hidden
          h-full
          w-36
          bg-gradient-to-r
          from-[#050505]
          via-[#050505]/80
          to-transparent

          md:block
        "
      />

      {/* =====================================
          RIGHT FADE
          Desktop only
      ====================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-20
          hidden
          h-full
          w-36
          bg-gradient-to-l
          from-[#050505]
          via-[#050505]/80
          to-transparent

          md:block
        "
      />

      {/* =====================================
          MOBILE SCROLL CONTAINER
      ====================================== */}

      <div
        className="
          overflow-x-auto
          overflow-y-hidden

          px-4

          md:overflow-visible
          md:px-0

          scrollbar-none
        "
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >

        {/* =====================================
            TRACK
        ====================================== */}

        <div
          ref={trackRef}
          className="
            flex
            w-max
            gap-4
            px-0

            sm:gap-5

            md:gap-6
            md:px-10

            lg:gap-7
            lg:px-14
          "
        >

          {duplicatedProducts.map(
            (product, index) => {

              const isHovered =
                hoveredProduct === product.id;

              const anotherHovered =
                hoveredProduct !== null &&
                hoveredProduct !== product.id;

              return (
                <div
                  key={`${product.id}-${index}`}
                  className={`
                    shrink-0

                    transition-all
                    duration-500
                    ease-out

                    ${
                      anotherHovered
                        ? "scale-[0.97] opacity-25 blur-[3px]"
                        : "scale-100 opacity-100 blur-0"
                    }
                  `}
                >

                  <ProductCard
                    product={product}
                    isHovered={isHovered}
                    onEnter={() =>
                      setHoveredProduct(
                        product.id
                      )
                    }
                    onLeave={() =>
                      setHoveredProduct(null)
                    }
                  />

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
};

export default ProductsMarquee;