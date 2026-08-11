import React from "react";

const TimelineNode = ({
  step,
  point,
  isActive,
  nodeRef,
}) => {
  return (
    <div
      className="
        absolute
        z-20
        hidden
        -translate-x-1/2
        -translate-y-1/2
        md:block
      "
      style={{
        left: `calc(50% + ${point.x - 100}px)`,
        top: `${point.y}px`,
      }}
    >
      <div
        ref={nodeRef}
        className={`
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          border
          bg-[#050505]
          text-[10px]
          font-medium
          transition-colors
          duration-300

          ${
            isActive
              ? "border-emerald-400 text-emerald-400 shadow-[0_0_25px_rgba(52,211,153,0.35)]"
              : "border-white/20 text-gray-500"
          }
        `}
      >
        {step.number}
      </div>
    </div>
  );
};

export default TimelineNode;