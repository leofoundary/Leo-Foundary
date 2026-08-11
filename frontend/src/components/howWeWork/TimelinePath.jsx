import React, { forwardRef } from "react";
import { timelinePath } from "../../data/howWeWorkData";

const TimelinePath = forwardRef(
  ({ pathDotRef, pathGlowRef }, pathRef) => {
    return (
      <svg
        className="pointer-events-none absolute left-1/2 top-0 hidden h-[1450px] w-[200px] -translate-x-1/2 md:block"
        viewBox="0 0 200 1450"
        fill="none"
        preserveAspectRatio="none"
      >

        {/* Base dotted path */}

        <path
          ref={pathRef}
          d={timelinePath}
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="2"
          strokeDasharray="1 12"
          strokeLinecap="round"
        />

        {/* Emerald dotted path */}

        <path
          d={timelinePath}
          stroke="rgba(52,211,153,0.45)"
          strokeWidth="2"
          strokeDasharray="1 12"
          strokeLinecap="round"
        />

        {/* Walking dot glow */}

        <circle
          ref={pathGlowRef}
          cx="100"
          cy="20"
          r="13"
          fill="rgba(52,211,153,0.16)"
        />

        {/* Walking dot */}

        <circle
          ref={pathDotRef}
          cx="100"
          cy="20"
          r="5"
          fill="#34d399"
          stroke="#a7f3d0"
          strokeWidth="1.5"
        />

      </svg>
    );
  }
);

TimelinePath.displayName = "TimelinePath";

export default TimelinePath;