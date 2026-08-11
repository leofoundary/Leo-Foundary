import React, {
  useLayoutEffect,
  useRef,
} from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProductMarquee from "./ProductMarquee";
import { products } from "../../data/productsData";

gsap.registerPlugin(ScrollTrigger);

const ProductConcepts = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions:
            "play none none reverse",
        },
      });

      tl.fromTo(
        ".products-label",
        {
          y: 25,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      )
        .fromTo(
          ".products-heading",
          {
            y: 55,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.25"
        )
        .fromTo(
          ".products-description",
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
          },
          "-=0.45"
        )
        .fromTo(
          ".products-marquee",
          {
            y: 45,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            ease: "power4.out",
          },
          "-=0.35"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        overflow-hidden
        py-32
        text-white
      "
    >
      {/* Background glow */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[25%]
          h-[600px]
          w-[800px]
          -translate-x-1/2
          rounded-full
          bg-emerald-400/[0.02]
          blur-[160px]
        "
      />

      {/* Header */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[720px]
          px-6
          text-center
        "
      >
        <p
          className="
            products-label
            text-[11px]
            font-medium
            uppercase
            tracking-[0.4em]
            text-emerald-400
          "
        >
          Product Concepts
        </p>

        <h2
          className="
            products-heading
            mt-5
            text-4xl
            font-light
            leading-tight
            tracking-[-0.05em]
            md:text-5xl
            lg:text-6xl
          "
        >
          Ideas we're turning{" "}
          <span className="font-bold text-emerald-400">
            into products.
          </span>
        </h2>

        <p
          className="
            products-description
            mx-auto
            mt-6
            max-w-[590px]
            text-sm
            font-light
            leading-7
            text-gray-500
            md:text-base
          "
        >
          Exploring what the next generation of
          intelligent business software could look like.
        </p>
      </div>

      {/* Marquee */}

      <div className="products-marquee relative z-10">
        <ProductMarquee products={products} />
      </div>
    </section>
  );
};

export default ProductConcepts;