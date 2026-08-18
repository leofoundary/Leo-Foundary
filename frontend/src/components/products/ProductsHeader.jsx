import React from "react";

const ProductsHeader = () => {
  return (
    <div
      className="
        mx-auto
        max-w-[1500px]
        px-6

        sm:px-8

        md:px-10

        lg:px-14
      "
    >
      <div
        className="
          mx-auto
          max-w-4xl
          text-center
        "
      >

        {/* LABEL */}

        <p
          className="
            text-[8px]
            font-medium
            uppercase
            tracking-[0.32em]
            text-emerald-400

            sm:text-[9px]
            sm:tracking-[0.4em]

            md:text-[10px]
          "
        >
          Product Concepts
        </p>


        {/* HEADING */}

        <h2
          className="
            mt-5

            text-[42px]
            font-light
            leading-[0.92]
            tracking-[-0.055em]
            text-white

            sm:text-5xl

            md:text-6xl

            lg:text-7xl
          "
        >
          Ideas we're
          <span
            className="
              font-bold
              text-emerald-400
            "
          >
            {" "}
            building.
          </span>
        </h2>


        {/* DESCRIPTION */}

        <p
          className="
            mx-auto
            mt-6
            max-w-[330px]
            text-[13px]
            font-light
            leading-6
            text-gray-500

            sm:max-w-xl
            sm:text-sm
            sm:leading-7

            md:mt-7
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