import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  const mousePosition = useRef({
    x: -100,
    y: -100,
  });

  const animationFrame = useRef(null);

  const [isOverButton, setIsOverButton] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      mousePosition.current = {
        x: e.clientX,
        y: e.clientY,
      };

      // Check interactive element
      const element = document.elementFromPoint(
        e.clientX,
        e.clientY
      );

      const interactiveElement = element?.closest("button, a");

      setIsOverButton(!!interactiveElement);

      if (!animationFrame.current) {
        animationFrame.current = requestAnimationFrame(() => {
          const { x, y } = mousePosition.current;

          if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
          }

          if (ringRef.current) {
            ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
          }

          animationFrame.current = null;
        });
      }
    };

    window.addEventListener("mousemove", moveCursor, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);

      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        ref={ringRef}
        className={`
          pointer-events-none
          fixed
          left-0
          top-0
          z-[99999]
          hidden
          h-8
          w-8
          rounded-full
          border
          transition-colors
          duration-200
          md:block

          ${
            isOverButton
              ? "border-black/40 bg-black/10 shadow-[0_0_20px_rgba(0,0,0,0.25)]"
              : "border-emerald-400/40 bg-emerald-400/5 shadow-[0_0_25px_rgba(52,211,153,0.35)]"
          }
        `}
      />

      {/* Inner dot */}
      <div
        ref={cursorRef}
        className={`
          pointer-events-none
          fixed
          left-0
          top-0
          z-[100000]
          hidden
          h-1.5
          w-1.5
          rounded-full
          transition-colors
          duration-200
          md:block

          ${
            isOverButton
              ? "bg-black shadow-[0_0_12px_rgba(0,0,0,0.8)]"
              : "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,1)]"
          }
        `}
      />
    </>
  );
};

export default CustomCursor;