import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import ProductVisual from "./ProductVisual";

const ProductCard = ({
  product,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <Link
      to={`/products/${product.id}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        product-card
        group
        relative
        block
        h-[520px]
        w-[420px]
        shrink-0
        overflow-hidden
        rounded-2xl
        border
        bg-[#070909]
        p-6
        transition-all
        duration-500
        ease-out

        ${
          isHovered
            ? "z-50 scale-[1.025] border-emerald-400/40 shadow-[0_0_70px_rgba(52,211,153,0.10)]"
            : "border-white/10"
        }
      `}
    >
      {/* Subtle background grid */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
        "
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top information */}

      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <span className="text-[9px] font-medium tracking-[0.28em] text-emerald-400">
            PRODUCT CONCEPT · {product.number}
          </span>

          <div
            className={`
              flex h-8 w-8 items-center justify-center
              rounded-full
              border
              transition-all
              duration-300
              ${
                isHovered
                  ? "border-emerald-400/30 bg-emerald-400/10 text-emerald-400"
                  : "border-white/10 bg-white/[0.02] text-gray-600"
              }
            `}
          >
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className={`
                transition-transform
                duration-300
                ${
                  isHovered
                    ? "-translate-y-0.5 translate-x-0.5"
                    : ""
                }
              `}
            />
          </div>
        </div>

        <h3 className="mt-5 text-3xl font-light tracking-[-0.04em] text-white">
          {product.title}
        </h3>

        <p className="mt-2 max-w-[320px] text-[13px] leading-5 text-gray-400">
          {product.tagline}
        </p>
      </div>

      {/* Product interface */}

      <div
        className="
          absolute
          bottom-[82px]
          left-6
          right-6
          top-[185px]
          overflow-hidden
          rounded-xl
          transition-transform
          duration-700
          ease-out
          group-hover:scale-[1.02]
        "
      >
        <ProductVisual type={product.visual} />
      </div>

      {/* Bottom information */}

      <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-white/10
                px-2.5
                py-1
                text-[8px]
                tracking-wide
                text-gray-500
                transition-all
                duration-300
                group-hover:border-emerald-400/20
                group-hover:text-gray-400
              "
            >
              {tag}
            </span>
          ))}
        </div>

        <span
          className="
            shrink-0
            text-[9px]
            font-medium
            text-gray-600
            transition-colors
            duration-300
            group-hover:text-emerald-400
          "
        >
          Explore
        </span>
      </div>

      {/* Bottom glow */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-28
          left-1/2
          h-48
          w-72
          -translate-x-1/2
          rounded-full
          bg-emerald-400/[0.045]
          opacity-0
          blur-3xl
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Top-right glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-emerald-400/[0.025]
          opacity-0
          blur-3xl
          transition-opacity
          duration-700
          group-hover:opacity-100
        "
      />
    </Link>
  );
};

export default ProductCard;