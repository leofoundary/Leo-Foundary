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

    const animate = (time) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }

      const delta =
        time - lastTimeRef.current;

      lastTimeRef.current = time;

      /*
       * Pause the movement while a card
       * is being hovered.
       */

      if (hoveredProduct === null) {
        positionRef.current -=
          (speed * delta) / 1000;
      }

      /*
       * Measure the first set of cards.
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
    <div className="relative mt-20 md:mt-24">
      {/* Left fade */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-20
          h-full
          w-20
          bg-gradient-to-r
          from-[#050505]
          via-[#050505]/80
          to-transparent
          md:w-36
        "
      />

      {/* Right fade */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-20
          h-full
          w-20
          bg-gradient-to-l
          from-[#050505]
          via-[#050505]/80
          to-transparent
          md:w-36
        "
      />

      {/* Track */}

      <div
        ref={trackRef}
        className="
          flex
          w-max
          gap-5
          px-6
          will-change-transform
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
  );
};

export default ProductsMarquee;