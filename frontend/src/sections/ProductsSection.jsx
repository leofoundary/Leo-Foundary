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
        overflow-hidden
        border-y
        border-white/[0.06]
        py-32
        md:py-40
        lg:py-48
      "
    >
      {/* HEADER */}

      <ProductsHeader />


      {/* PRODUCT SHOWCASE */}

      <div className="mt-20 md:mt-28">
        <ProductsMarquee products={products} />
      </div>


      {/* BOTTOM INFORMATION */}

      <div
        className="
          mx-auto
          mt-12
          flex
          max-w-[1500px]
          flex-col
          gap-8
          px-6

          md:mt-16
          md:flex-row
          md:items-end
          md:justify-between
          md:px-10

          lg:px-14
        "
      >
        <div>
          <p
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-gray-700
            "
          >
            Selected products
          </p>

          <p
            className="
              mt-3
              max-w-md
              text-sm
              font-light
              leading-6
              text-gray-500
            "
          >
            Systems built around the way modern businesses actually work.
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
            gap-4
            border-b
            border-white/[0.12]
            pb-3
            text-[10px]
            font-medium
            uppercase
            tracking-[0.25em]
            text-gray-400
            transition-colors
            duration-300
            hover:border-emerald-400/40
            hover:text-emerald-400
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