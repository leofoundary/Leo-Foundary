import React from "react";

const ContactBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div
        className="
          absolute
          left-1/2
          top-20
          -translate-x-1/2
          w-[700px]
          h-[500px]
          rounded-full
          bg-emerald-400/[0.08]
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-20
          -translate-x-1/2
          whitespace-nowrap
          select-none
          pointer-events-none
          text-[22vw]
          md:text-[20vw]
          lg:text-[18vw]
          font-extrabold
          tracking-[-0.07em]
          leading-none
          text-emerald-300/10
        "
      >
        CONTACT
      </div>

      {/* Left circuit line */}
      <div
        className="
          absolute
          -left-32
          top-28
          w-[500px]
          h-[300px]
          rotate-[25deg]
          border-t
          border-emerald-300/30
        "
      >
        <span
          className="
            absolute
            left-[35%]
            -top-[4px]
            w-2
            h-2
            rounded-full
            border
            border-emerald-300/40
            bg-[#050606]
          "
        />

        <span
          className="
            absolute
            right-[15%]
            -top-[4px]
            w-2
            h-2
            rounded-full
            border
            border-emerald-300/40
            bg-[#050606]
          "
        />
      </div>

      <div
        className="
          absolute
          -right-32
          top-36
          w-[500px]
          h-[300px]
          -rotate-[25deg]
          border-t
          border-emerald-300/30
        "
      >
        <span
          className="
            absolute
            left-[35%]
            -top-[4px]
            w-2
            h-2
            rounded-full
            border
            border-emerald-300/40
            bg-[#050606]
          "
        />

        <span
          className="
            absolute
            right-[15%]
            -top-[4px]
            w-2
            h-2
            rounded-full
            border
            border-emerald-300/40
            bg-[#050606]
          "
        />
      </div>
    </div>
  );
};

export default ContactBackground;
