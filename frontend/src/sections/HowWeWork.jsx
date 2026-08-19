import React from "react";
import HowWeWorkHero from "../components/howWeWork/HowWeWorkHero";
import HowWeWorkTimeline from "../components/howWeWork/HowWeWorkTimeline";

const HowWeWork = () => {
  return (
    <main className="relative w-full overflow-hidden text-white">
      <HowWeWorkHero />
      <HowWeWorkTimeline />
    </main>
  );
};

export default HowWeWork;