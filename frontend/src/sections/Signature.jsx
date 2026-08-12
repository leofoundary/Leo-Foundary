import React, { useRef } from "react";

const Signature = () => {
  const sectionRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = sectionRef.current.getBoundingClientRect();

    const x =
      ((e.clientX - rect.left) / rect.width) * 100;

    const y =
      ((e.clientY - rect.top) / rect.height) * 100;

    sectionRef.current.style.setProperty(
      "--mouse-x",
      `${x}%`
    );

    sectionRef.current.style.setProperty(
      "--mouse-y",
      `${y}%`
    );
  };

  return (
    <section className="bg-[#050505] px-4 py-10 md:px-8">
      <div
        ref={sectionRef}
        onMouseMove={handleMouseMove}
        className="
          group
          relative
          mx-auto
          flex
          h-[240px]
          w-full
          max-w-[1500px]
          items-center
          justify-center
          overflow-hidden
          border
          border-white/20
          transition-all
          duration-500
          hover:border-emerald-400/40
          md:h-[300px]
          lg:h-[360px]
        "
        style={{
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        }}
      >
        {/* Subtle cursor glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition-opacity
            duration-500
            group-hover:opacity-100
          "
          style={{
            background:
              "radial-gradient(circle 180px at var(--mouse-x) var(--mouse-y), rgba(52,211,153,0.07), transparent 70%)",
          }}
        />

        {/* Empty outlined text */}

        <h2
          className="
            pointer-events-none
            relative
            z-10
            select-none
            whitespace-nowrap
            text-[15vw]
            font-bold
            uppercase
            leading-none
            tracking-[-0.07em]
            text-transparent
            [-webkit-text-stroke:1px_rgba(255,255,255,0.22)]
            md:text-[12vw]
            lg:text-[10vw]
          "
        >
          LEO FOUNDARY
        </h2>

        {/* Filled text revealed around cursor */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-20
            opacity-0
            transition-opacity
            duration-300
            group-hover:opacity-100
          "
          style={{
            WebkitMaskImage:
              "radial-gradient(circle 150px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",

            maskImage:
              "radial-gradient(circle 150px at var(--mouse-x) var(--mouse-y), black 0%, transparent 100%)",
          }}
        >
          <h2
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              select-none
              whitespace-nowrap
              text-[15vw]
              font-bold
              uppercase
              leading-none
              tracking-[-0.07em]
              text-emerald-400
              md:text-[12vw]
              lg:text-[10vw]
            "
          >
            LEO FOUNDARY
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Signature;