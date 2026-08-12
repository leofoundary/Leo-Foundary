import React from "react";

import { products } from "../data/products";

import ProductsHeader from "../components/products/ProductsHeader";
import ProductsMarquee from "../components/products/ProductsMarquee";

const ProductsSection = () => {
  return (
    <section
      id="products"
      className="
        relative
        overflow-hidden
        py-32
        md:py-40
        lg:py-48
      "
    >
      <ProductsHeader />

      <ProductsMarquee products={products} />

      <div
        className="
          mx-auto
          mt-12
          max-w-[1500px]
          px-6
          md:px-10
          lg:px-14
        "
      >
        <p
          className="
            text-[9px]
            font-medium
            uppercase
            tracking-[0.3em]
            text-gray-700
          "
        >
          Hover to explore
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;