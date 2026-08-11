import React from "react";
import HowWeWorkHero from "../components/howwework/HowWeWorkHero";
import HowWeWorkTimeline from "../components/howwework/HowWeWorkTimeline";

const HowWeWork = () => {
  return (
    <main className="relative w-full overflow-hidden text-white">
      <HowWeWorkHero />
      <HowWeWorkTimeline />
    </main>
  );
};

export default HowWeWork;