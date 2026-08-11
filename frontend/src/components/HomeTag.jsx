import React from 'react';
import "../style/HomeContent.css";
import { Dot } from "lucide-react";

const HomeTag = () => {
  return (
    <div className="fonthero-tag tag flex items-center gap-2 text-[18px] font-light text-gray-300">
        <span>AI </span>
        <span>
          <Dot size={36} />
        </span>
        <span>Software</span>
        <span>
          <Dot size={36} />
        </span>
        <span>Automation</span>
      </div>
  );
};

export default HomeTag;