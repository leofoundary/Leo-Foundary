import React from "react";
import HowWeWorkDetail from "./HowWeWorkDetail";

const HowWeWorkCard = ({
  step,
  point,
  index,
  isActive,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  cardRef,
}) => {
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={cardRef}
      className={`
        absolute
        w-[420px]
        md:w-[420px]
        ${isHovered ? "z-50" : "z-10"}
      `}
      style={{
        left: isLeft
          ? "calc(50% - 485px)"
          : "calc(50% + 65px)",

        top: `${point.y - 95}px`,
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >

      {/* Main card */}

      <div
        className={`
          relative
          min-h-[220px]
          rounded-2xl
          border
          p-8
          transition-all
          duration-500

          ${
            isActive
              ? "border-emerald-400/30 bg-emerald-400/[0.025]"
              : "border-white/[0.10] bg-white/[0.015]"
          }

          ${
            isHovered
              ? "border-emerald-400/50 shadow-[0_0_40px_rgba(52,211,153,0.08)]"
              : ""
          }
        `}
      >

        <div className="text-[18px] font-medium tracking-[0.35em] text-emerald-400">
          {step.number}
        </div>

        <h3 className="mt-4 text-[20px] font-semibold tracking-wide text-white">
          {step.title}
        </h3>

        <p className="mt-4 max-w-[340px] text-[14px] leading-6 text-gray-300">
          {step.short}
        </p>

      </div>

      {/* Hover detail */}

      <HowWeWorkDetail
        step={step}
        isLeft={isLeft}
        isHovered={isHovered}
      />

    </div>
  );
};

export default HowWeWorkCard;