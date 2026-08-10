import React from "react";
import "../style/HomeBackground.css";
const particles = [
  { left: "5%", top: "15%", size: 2, duration: 10, delay: 0 },
  { left: "11%", top: "42%", size: 2, duration: 13, delay: 2 },
  { left: "17%", top: "72%", size: 3, duration: 11, delay: 4 },
  { left: "24%", top: "25%", size: 2, duration: 14, delay: 1 },
  { left: "29%", top: "58%", size: 2, duration: 12, delay: 5 },
  { left: "35%", top: "82%", size: 2, duration: 10, delay: 3 },
  { left: "41%", top: "18%", size: 3, duration: 13, delay: 6 },
  { left: "47%", top: "47%", size: 2, duration: 11, delay: 2 },
  { left: "53%", top: "75%", size: 2, duration: 14, delay: 7 },
  { left: "59%", top: "30%", size: 2, duration: 12, delay: 4 },
  { left: "64%", top: "60%", size: 3, duration: 10, delay: 1 },
  { left: "70%", top: "12%", size: 2, duration: 13, delay: 5 },
  { left: "75%", top: "42%", size: 2, duration: 11, delay: 8 },
  { left: "80%", top: "78%", size: 2, duration: 14, delay: 3 },
  { left: "86%", top: "24%", size: 3, duration: 10, delay: 6 },
  { left: "92%", top: "55%", size: 2, duration: 12, delay: 2 },
  { left: "97%", top: "82%", size: 2, duration: 13, delay: 7 },
  { left: "8%", top: "88%", size: 2, duration: 11, delay: 4 },
  { left: "21%", top: "48%", size: 2, duration: 12, delay: 9 },
  { left: "44%", top: "65%", size: 2, duration: 10, delay: 5 },
  { left: "57%", top: "90%", size: 2, duration: 13, delay: 8 },
  { left: "73%", top: "68%", size: 2, duration: 11, delay: 3 },
  { left: "89%", top: "38%", size: 2, duration: 14, delay: 6 },
  { left: "32%", top: "10%", size: 2, duration: 12, delay: 1 },
];

const HomeBackground = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-black">

      {/* Subtle grid */}
      <div
        className="
          absolute inset-0
          opacity-[0.045]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Main emerald glow */}
      <div
        className="
          absolute left-1/2 top-[-250px]
          h-[600px] w-[800px]
          -translate-x-1/2
          rounded-full
          bg-emerald-400/[0.06]
          blur-[150px]
        "
      />

      {/* Side glow */}
      <div
        className="
          absolute left-[-250px] top-[40%]
          h-[500px] w-[500px]
          rounded-full
          bg-emerald-400/[0.025]
          blur-[140px]
        "
      />

      <div
        className="
          absolute right-[-250px] top-[65%]
          h-[500px] w-[500px]
          rounded-full
          bg-emerald-400/[0.025]
          blur-[140px]
        "
      />

      {/* Floating particles */}
      {particles.map((particle, index) => (
        <span
          key={index}
          className="absolute rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)] animate-particle"
          style={{
            left: particle.left,
            top: particle.top,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#000000_100%)]" />
    </div>
  );
};

export default HomeBackground;