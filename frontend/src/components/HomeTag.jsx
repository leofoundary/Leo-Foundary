import React from "react";
import "../style/HomeContent.css";
import { Dot } from "lucide-react";

const HomeTag = () => {
  return (
    <div
      className="
        hero-tag
        flex
        items-center
        justify-center
        gap-1
        whitespace-nowrap
        px-4
        text-xs
        font-light
        text-gray-300

        sm:gap-2
        sm:text-sm

        md:text-lg
      "
    >
      <span>AI</span>

      <Dot
        className="shrink-0"
        size={22}
        strokeWidth={1.5}
      />

      <span>Software</span>

      <Dot
        className="shrink-0"
        size={22}
        strokeWidth={1.5}
      />

      <span>Automation</span>
    </div>
  );
};

export default HomeTag;