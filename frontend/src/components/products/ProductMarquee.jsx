import React, {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import gsap from "gsap";

import ProductCard from "./ProductCard";

const ProductMarquee = ({ products }) => {
  const trackRef = useRef(null);
  const animationRef = useRef(null);
  const resumeTimerRef = useRef(null);

  const [hoveredIndex, setHoveredIndex] =
    useState(null);

  const marqueeProducts = [
    ...products,
    ...products,
  ];

  useLayoutEffect(() => {
    const track = trackRef.current;

    if (!track) return;

    let animation;

    const createAnimation = () => {
      if (animation) {
        animation.kill();
      }

      gsap.set(track, { x: 0 });

      const cards =
        track.querySelectorAll(".product-card");

      if (!cards.length) return;

      const firstCard = cards[0];

      const cardWidth =
        firstCard.getBoundingClientRect().width;

      const trackStyle =
        window.getComputedStyle(track);

      const gap =
        parseFloat(trackStyle.columnGap) || 0;

      const totalWidth =
        (cardWidth + gap) *
        products.length;

      if (!totalWidth) return;

      animation = gsap.to(track, {
        x: -totalWidth,
        duration: 32,
        ease: "none",
        repeat: -1,
      });

      animationRef.current = animation;
    };

    createAnimation();

    const handleResize = () => {
      createAnimation();
    };

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      if (animation) {
        animation.kill();
      }

      if (resumeTimerRef.current) {
        resumeTimerRef.current.kill();
      }
    };
  }, [products]);

  const handleMouseEnter = (index) => {
    if (resumeTimerRef.current) {
      resumeTimerRef.current.kill();
      resumeTimerRef.current = null;
    }

    setHoveredIndex(index);

    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);

    if (resumeTimerRef.current) {
      resumeTimerRef.current.kill();
    }

    resumeTimerRef.current = gsap.delayedCall(
      0.4,
      () => {
        if (animationRef.current) {
          animationRef.current.resume();
        }
      }
    );
  };

  return (
    <div className="relative mt-16 w-full">
      {/* Left fade */}

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          z-40
          h-full
          w-40
          bg-gradient-to-r
          from-[#050505]
          via-[#050505]/80
          to-transparent
        "
      />

      {/* Right fade */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          z-40
          h-full
          w-40
          bg-gradient-to-l
          from-[#050505]
          via-[#050505]/80
          to-transparent
        "
      />

      <div className="overflow-hidden py-10">
        <div
          ref={trackRef}
          className="
            flex
            w-max
            gap-5
            will-change-transform
          "
        >
          {marqueeProducts.map(
            (product, index) => {
              const originalIndex =
                index % products.length;

              const isHovered =
                hoveredIndex === originalIndex;

              const anotherCardHovered =
                hoveredIndex !== null &&
                !isHovered;

              return (
                <div
                  key={`${product.id}-${index}`}
                  className={`
                    shrink-0
                    transition-all
                    duration-500
                    ease-out
                    ${
                      anotherCardHovered
                        ? "scale-[0.97] opacity-25 blur-[4px]"
                        : ""
                    }
                  `}
                >
                  <ProductCard
                    product={product}
                    isHovered={isHovered}
                    onMouseEnter={() =>
                      handleMouseEnter(
                        originalIndex
                      )
                    }
                    onMouseLeave={
                      handleMouseLeave
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

export default ProductMarquee;