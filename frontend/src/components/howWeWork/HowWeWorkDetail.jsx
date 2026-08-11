import React from "react";

const HowWeWorkDetail = ({
  step,
  isLeft,
  isHovered,
}) => {
  return (
    <div
      className={`
        pointer-events-none
        absolute
        top-1/2
        z-[999]
        w-[290px]
        -translate-y-1/2
        transition-all
        duration-500
        ease-out

        ${
          isLeft
            ? "left-[calc(100%+30px)]"
            : "right-[calc(100%+30px)]"
        }

        ${
          isHovered
            ? "translate-x-0 opacity-100"
            : isLeft
            ? "translate-x-8 opacity-0"
            : "-translate-x-8 opacity-0"
        }
      `}
    >
      <div className="relative rounded-xl border border-emerald-400/20 bg-[#090909] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.8)]">

        {/* Connector */}

        <div
          className={`
            absolute
            top-1/2
            h-px
            w-[30px]
            bg-emerald-400/20

            ${
              isLeft
                ? "-left-[30px]"
                : "-right-[30px]"
            }
          `}
        />

        {/* Header */}

        <div className="flex items-center gap-3">

          <span className="text-[22px] tracking-[0.3em] text-emerald-400">
            {step.number}
          </span>

          <div className="h-px flex-1 bg-white/10" />

        </div>

        {/* Title */}

        <h4 className="mt-4 text-[18px] font-semibold">
          {step.title}
        </h4>

        {/* Detail */}

        <p className="mt-3 text-[13px] leading-5 text-gray-300">
          {step.detail}
        </p>

        {/* Tags */}

        <div className="mt-5 flex flex-wrap gap-1.5">

          {step.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-2.5 py-1 text-[12px] text-gray-400"
            >
              {tag}
            </span>
          ))}

        </div>

      </div>
    </div>
  );
};

export default HowWeWorkDetail;