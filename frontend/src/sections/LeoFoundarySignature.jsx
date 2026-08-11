import React, { useRef } from "react";

const LeoFoundarySignature = () => {
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = textRef.current.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width) * 100;

    const y =
      ((e.clientY - rect.top) / rect.height) * 100;

    textRef.current.style.setProperty(
      "--mouse-x",
      `${x}%`
    );

    textRef.current.style.setProperty(
      "--mouse-y",
      `${y}%`
    );
  };

  return (
    <section
      className="
        relative
        flex
        w-full
        items-center
        justify-center
        overflow-hidden
        px-4
        py-24
        md:px-8
        md:py-28
      "
    >
      <div
        ref={textRef}
        onMouseMove={handleMouseMove}
        className="
          group
          relative
          flex
          w-full
          items-center
          justify-center
        "
        style={{
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        }}
      >
        {/* Base text */}

        <h2
          className="
            select-none
            whitespace-nowrap
            text-center
            text-[14vw]
            font-bold
            uppercase
            leading-none
            tracking-[-0.045em]
            text-white/[0.08]
            transition-transform
            duration-500
            md:text-[11vw]
            lg:text-[9.5vw]
          "
          style={{
            transform: "scaleX(1.12)",
          }}
        >
          LEO FOUNDARY
        </h2>

        {/* Emerald cursor reveal */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            flex
            items-center
            justify-center
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
          style={{
            WebkitMaskImage:
              "radial-gradient(circle 145px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",

            maskImage:
              "radial-gradient(circle 145px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
          }}
        >
          <h2
            className="
              select-none
              whitespace-nowrap
              text-center
              text-[14vw]
              font-bold
              uppercase
              leading-none
              tracking-[-0.045em]
              text-emerald-400
              md:text-[11vw]
              lg:text-[9.5vw]
            "
            style={{
              transform: "scaleX(1.12)",
            }}
          >
            LEO FOUNDARY
          </h2>
        </div>
      </div>
    </section>
  );
};

export default LeoFoundarySignature;