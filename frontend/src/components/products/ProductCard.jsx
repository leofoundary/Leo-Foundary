import React from "react";
import { Link } from "react-router-dom";
import ProductVisual from "./ProductVisual";

const ProductCard = ({
  product,
  isHovered,
  onEnter,
  onLeave,
}) => {
  return (
    <Link
      to={`/products#${product.id}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`
        relative
        block
        h-[430px]
        w-[330px]
        shrink-0
        overflow-hidden
        rounded-[4px]
        border
        bg-[#080808]
        transition-all
        duration-500
        ease-out
        md:h-[470px]
        md:w-[360px]
        lg:h-[500px]
        lg:w-[390px]
        ${
          isHovered
            ? "scale-[1.025] border-emerald-400/30"
            : "border-white/[0.07]"
        }
      `}
    >
      {/* Hover glow */}

      <div
        className={`
          pointer-events-none
          absolute
          inset-0
          transition-opacity
          duration-700
          ${
            isHovered
              ? "opacity-100"
              : "opacity-0"
          }
        `}
      >
        <div
          className="
            absolute
            -right-24
            -top-24
            h-64
            w-64
            rounded-full
            bg-emerald-400/[0.035]
            blur-3xl
          "
        />
      </div>

      {/* Header */}

      <div
        className="
          relative
          z-10
          flex
          items-start
          justify-between
          p-6
          md:p-7
        "
      >
        <div>
          <p
            className="
              text-[9px]
              font-medium
              uppercase
              tracking-[0.28em]
              text-emerald-400
            "
          >
            {product.category}
          </p>

          <p
            className="
              mt-2
              text-[9px]
              font-medium
              tracking-[0.2em]
              text-gray-700
            "
          >
            {product.number}
          </p>
        </div>

        <div
          className={`
            text-xl
            font-light
            transition-all
            duration-500
            ${
              isHovered
                ? "translate-x-0 text-emerald-400"
                : "-translate-x-1 text-gray-700"
            }
          `}
        >
          ↗
        </div>
      </div>

      {/* Product name */}

      <div
        className="
          relative
          z-10
          px-6
          pt-12
          md:px-7
          md:pt-14
        "
      >
        <h3
          className="
            text-5xl
            font-light
            leading-none
            tracking-[-0.07em]
            text-white
            md:text-6xl
          "
        >
          {product.title}
        </h3>

        <p
          className="
            mt-5
            max-w-[280px]
            text-sm
            font-light
            leading-6
            text-gray-500
          "
        >
          {product.tagline}
        </p>
      </div>

      <ProductVisual isHovered={isHovered} />

      {/* Tags */}

      <div
        className="
          absolute
          bottom-6
          left-6
          right-6
          z-10
          flex
          flex-wrap
          gap-2
          md:bottom-7
          md:left-7
          md:right-7
        "
      >
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="
              rounded-full
              border
              border-white/[0.07]
              px-2.5
              py-1
              text-[7px]
              font-medium
              tracking-[0.18em]
              text-gray-600
            "
          >
            {tag}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default ProductCard;