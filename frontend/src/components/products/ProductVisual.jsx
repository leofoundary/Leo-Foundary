import React from "react";

const ProductVisual = ({ isHovered }) => {
  return (
    <div
      className="
        pointer-events-none
        absolute
        bottom-16
        left-0
        right-0
        h-36
      "
    >
      {/* Outer ring */}

      <div
        className={`
          absolute
          left-1/2
          top-1/2
          h-36
          w-36
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          transition-all
          duration-700
          ease-out
          ${
            isHovered
              ? "scale-110 border-emerald-400/25"
              : "scale-100 border-white/[0.06]"
          }
        `}
      />

      {/* Middle ring */}

      <div
        className={`
          absolute
          left-1/2
          top-1/2
          h-24
          w-24
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          transition-all
          duration-700
          ${
            isHovered
              ? "scale-110 border-emerald-400/20"
              : "scale-100 border-white/[0.05]"
          }
        `}
      />

      {/* Inner ring */}

      <div
        className={`
          absolute
          left-1/2
          top-1/2
          h-10
          w-10
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          transition-all
          duration-700
          ${
            isHovered
              ? "scale-125 border-emerald-400/30"
              : "scale-100 border-white/[0.08]"
          }
        `}
      />

      {/* Center */}

      <div
        className={`
          absolute
          left-1/2
          top-1/2
          h-2
          w-2
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-emerald-400
          transition-all
          duration-500
          ${
            isHovered
              ? "scale-[2]"
              : "scale-100"
          }
        `}
      />
    </div>
  );
};

export default ProductVisual;