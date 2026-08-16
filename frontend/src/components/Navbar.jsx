import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavIcon from "./NavIcon";
import "../style/Navbar.css"


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`
        navbar-global
        fixed
        left-0
        top-0
        z-50
        w-full
        transition-all
        duration-500
        ${
          scrolled
            ? "border-b border-white/[0.06] bg-black/40 backdrop-blur-xl"
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
          flex
          h-[76px]
          items-center
          justify-between
          px-6
          md:px-10
          lg:px-14
        "
      >
        <Link
          to="/"
          className="
            text-xl
            font-semibold
            tracking-[-0.04em]
            text-white
            transition-colors
            duration-300
            hover:text-emerald-400
            md:text-2xl
          "
        >
          Leo Foundry
        </Link>

        <NavIcon />
      </div>
    </header>
  );
};

export default Navbar;