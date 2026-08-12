import React from "react";

const ProductsHeader = () => {
  return (
    <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-14">
      <div className="mx-auto max-w-4xl text-center">
        <p
          className="
            text-[10px]
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
            mt-6
            text-5xl
            font-light
            leading-[0.95]
            tracking-[-0.06em]
            text-white
            md:text-6xl
            lg:text-7xl
          "
        >
          Ideas we're
          <span className="font-bold text-emerald-400">
            {" "}
            building.
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-7
            max-w-xl
            text-sm
            font-light
            leading-7
            text-gray-500
            md:text-base
          "
        >
          A collection of product concepts exploring
          how technology can make the way we work
          simpler, smarter, and more connected.
        </p>
      </div>
    </div>
  );
};

export default ProductsHeader;