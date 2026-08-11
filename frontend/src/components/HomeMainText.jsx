import React from 'react';
import "../style/HomeContent.css";

const HomeMainText = () => {
  return (
    <div className="hero-main-text relative w-full text-white flex flex-col items-center justify-center">
      <h1 className="main-text uppercase text-5xl md:text-6xl lg:text-7xl font-bold text-center">
        <span className='font-light'>Build What's Next.</span>
        <br />
        <span className='font-light'>
          Build It <span className="highlight-word font-bold">Intelligently.</span>
        </span>
      </h1>
      <p className="font-light supporting-text text-xl w-[50%] text-center mt-4 text-gray-300">
        We build intelligent software, AI systems, and digital experiences that
        turn ambitious ideas into scalable products.
      </p>
    </div>
  );
};

export default HomeMainText;