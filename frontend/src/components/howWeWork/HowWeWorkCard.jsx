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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`
        relative
        w-full
        min-w-0

        md:absolute
        md:w-[420px]

        ${isHovered ? "z-50" : "z-10"}
      `}
      style={{
        /*
         * Desktop positioning
         *
         * On mobile these values are not applied.
         */
        ...(point
          ? {
              left: isLeft
                ? "calc(50% - 485px)"
                : "calc(50% + 65px)",

              top: `${point.y - 95}px`,
            }
          : {}),
      }}
    >

      {/* =========================================
          MAIN CARD
      ========================================= */}

      <div
        className={`
          relative
          w-full
          min-w-0

          min-h-[190px]
          rounded-2xl

          border
          p-5

          sm:min-h-[200px]
          sm:p-6

          md:min-h-[220px]
          md:p-8

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

        {/* Step number */}

        <div
          className="
            text-[15px]
            font-medium
            tracking-[0.25em]
            text-emerald-400

            sm:text-[17px]
            sm:tracking-[0.3em]

            md:text-[18px]
            md:tracking-[0.35em]
          "
        >
          {step.number}
        </div>


        {/* Title */}

        <h3
          className="
            mt-3
            text-[18px]
            font-semibold
            tracking-wide
            text-white

            sm:mt-4
            sm:text-[19px]

            md:text-[20px]
          "
        >
          {step.title}
        </h3>


        {/* Description */}

        <p
          className="
            mt-3
            max-w-full
            text-[13px]
            leading-6
            text-gray-300

            sm:mt-4
            sm:text-[14px]

            md:max-w-[340px]
          "
        >
          {step.short}
        </p>

      </div>


      {/* =========================================
          HOVER DETAIL
      ========================================= */}

      <div className="hidden md:block">
        <HowWeWorkDetail
          step={step}
          isLeft={isLeft}
          isHovered={isHovered}
        />
      </div>

    </div>
  );
};

export default HowWeWorkCard;