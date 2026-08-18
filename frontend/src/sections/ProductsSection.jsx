import React from "react";

import { products } from "../data/products";

import ProductsHeader from "../components/products/ProductsHeader";
import ProductsMarquee from "../components/products/ProductsMarquee";
import { ArrowUpRight } from "lucide-react";

const ProductsSection = () => {
  return (
    <section
      id="products"
      className="
        relative
        w-full
        overflow-hidden
        border-y
        border-white/[0.06]

        py-20

        sm:py-24

        md:py-40

        lg:py-48
      "
    >

      {/* HEADER */}

      <ProductsHeader />


      {/* PRODUCT SHOWCASE */}

      <div
        className="
          mt-12

          sm:mt-16

          md:mt-28
        "
      >
        <ProductsMarquee products={products} />
      </div>


      {/* BOTTOM INFORMATION */}

      <div
        className="
          mx-auto
          mt-10
          flex
          max-w-[1500px]
          flex-col
          gap-7
          px-6

          sm:mt-12

          md:mt-16
          md:flex-row
          md:items-end
          md:justify-between
          md:px-10

          lg:px-14
        "
      >

        {/* INFORMATION */}

        <div>

          <p
            className="
              text-[8px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-gray-700

              sm:text-[9px]
            "
          >
            Selected products
          </p>

          <p
            className="
              mt-3
              max-w-[300px]
              text-[13px]
              font-light
              leading-6
              text-gray-500

              sm:text-sm
              sm:max-w-md
            "
          >
            Systems built around the way modern
            businesses actually work.
          </p>

        </div>


        {/* VIEW ALL */}

        <a
          href="/products"
          className="
            group
            inline-flex
            w-fit
            items-center
            gap-3
            border-b
            border-white/[0.12]
            pb-3
            text-[9px]
            font-medium
            uppercase
            tracking-[0.22em]
            text-gray-400
            transition-colors
            duration-300

            hover:border-emerald-400/40
            hover:text-emerald-400

            sm:gap-4
            sm:text-[10px]
            sm:tracking-[0.25em]
          "
        >
          View all products

          <ArrowUpRight
            size={14}
            strokeWidth={1.5}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
              group-hover:-translate-y-1
            "
          />
        </a>

      </div>

    </section>
  );
};

export default ProductsSection;