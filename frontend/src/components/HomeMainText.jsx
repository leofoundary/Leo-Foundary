import React from "react";
import "../style/HomeContent.css";

const HomeMainText = () => {
  return (
    <div
      className="
        hero-main-text
        relative
        flex
        w-full
        flex-col
        items-center
        justify-center
        px-4
        text-white
        sm:px-6
      "
    >
      <h1
        className="
          main-text
          text-center
          text-[2.6rem]
          font-bold
          uppercase
          leading-[0.92]
          tracking-[-0.055em]

          sm:text-5xl
          md:text-6xl
          lg:text-7xl
        "
      >
        <span className="font-light">
          Build What's Next.
        </span>

        <br />

        <span className="font-light">
          Build It{" "}
          <span className="highlight-word font-bold">
            Intelligently.
          </span>
        </span>
      </h1>

      <p
        className="
          supporting-text
          mt-5
          w-full
          max-w-[620px]
          px-2
          text-center
          text-sm
          font-light
          leading-6
          text-gray-300

          sm:text-base
          sm:leading-7

          md:mt-6
          md:text-xl
          md:leading-8
        "
      >
        We build intelligent software, AI systems, and digital
        experiences that turn ambitious ideas into scalable products.
      </p>
    </div>
  );
};

export default HomeMainText;