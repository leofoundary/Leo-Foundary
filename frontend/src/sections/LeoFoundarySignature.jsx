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
        py-20

        sm:px-5
        sm:py-24

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
          overflow-visible
        "
        style={{
          "--mouse-x": "50%",
          "--mouse-y": "50%",
        }}
      >

        {/* =====================================
            BASE TEXT
        ====================================== */}

        <h2
          className="
            select-none
            whitespace-nowrap
            text-center

            text-[clamp(42px,11vw,60px)]

            font-bold
            uppercase
            leading-none
            tracking-[-0.045em]

            text-white/[0.08]

            transition-transform
            duration-500

            sm:text-[clamp(42px,10vw,64px)]

            md:text-[11vw]

            lg:text-[9.5vw]
          "
          style={{
            transform: "scaleX(1.12)",
          }}
        >
          LEO FOUNDARY
        </h2>


        {/* =====================================
            EMERALD CURSOR REVEAL
        ====================================== */}

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

              text-[clamp(42px,11vw,60px)]

              font-bold
              uppercase
              leading-none
              tracking-[-0.045em]

              text-emerald-400

              sm:text-[clamp(42px,11vw,60px)]

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