import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import NavIcon from "./NavIcon";
import "../style/Navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Contact Us", path: "/contact" },
  { label: "About", path: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /*
   * Close menu when route changes
   */

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  /*
   * Lock page scrolling while mobile menu is open
   */

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`
        navbar-global
        fixed
        inset-x-0
        top-0
        z-[100]
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

      {/* =====================================
          NAVBAR
      ====================================== */}

      <div
        className="
          relative
          z-[120]
          flex
          h-[76px]
          items-center
          justify-between
          px-6

          md:px-10

          lg:px-14
        "
      >

        {/* LOGO */}

        <Link
          to="/"
          className="
            relative
            z-[130]
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


        {/* DESKTOP NAV */}

        <div className="hidden min-[651px]:block">
          <NavIcon />
        </div>


        {/* MOBILE HAMBURGER */}

        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() =>
            setMenuOpen((prev) => !prev)
          }
          className="
            relative
            z-[130]
            flex
            h-10
            w-10
            items-center
            justify-center

            min-[651px]:hidden
          "
        >
          <span className="relative block h-5 w-6">

            {/* TOP */}

            <span
              className={`
                absolute
                left-0
                top-0
                h-px
                w-6
                bg-white
                transition-all
                duration-500

                ${
                  menuOpen
                    ? "translate-y-[9px] rotate-45"
                    : ""
                }
              `}
            />

            {/* MIDDLE */}

            <span
              className={`
                absolute
                left-0
                top-[9px]
                h-px
                w-6
                bg-white
                transition-all
                duration-300

                ${
                  menuOpen
                    ? "opacity-0"
                    : "opacity-100"
                }
              `}
            />

            {/* BOTTOM */}

            <span
              className={`
                absolute
                left-0
                top-[18px]
                h-px
                w-6
                bg-white
                transition-all
                duration-500

                ${
                  menuOpen
                    ? "-translate-y-[9px] -rotate-45"
                    : ""
                }
              `}
            />

          </span>
        </button>

      </div>


      {/* =====================================
          MOBILE MENU
      ====================================== */}

      <div
        className={`
          fixed
          inset-0
          z-[110]
          h-[100dvh]
          w-screen
          bg-[#050505]

          min-[651px]:hidden

          ${
            menuOpen
              ? "pointer-events-auto visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }

          transition-opacity
          duration-500
        `}
      >

        {/* =================================
            GREEN GLOW
        ================================== */}

        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/4
            h-[350px]
            w-[350px]
            -translate-x-1/2
            rounded-full
            bg-emerald-400/[0.06]
            blur-[100px]
          "
        />


        {/* =================================
            MENU CONTENT
        ================================== */}

        <nav
          className="
            relative
            flex
            h-[100dvh]
            w-full
            flex-col
            justify-center
            px-8
          "
        >

          {/* LABEL */}

          <div className="mb-10 overflow-hidden">
            <p
              className={`
                text-[10px]
                font-medium
                uppercase
                tracking-[0.35em]
                text-emerald-400
                transition-all
                duration-700

                ${
                  menuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-5 opacity-0"
                }
              `}
            >
              Navigation
            </p>
          </div>


          {/* LINKS */}

          <div className="space-y-5">

            {navItems.map((item, index) => {
              const active =
                isActive(item.path);

              return (
                <div
                  key={item.path}
                  className="overflow-hidden"
                >

                  <Link
                    to={item.path}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className={`
                      block
                      text-5xl
                      font-light
                      tracking-[-0.05em]
                      transition-all
                      duration-700

                      ${
                        active
                          ? "text-emerald-400"
                          : "text-white"
                      }

                      ${
                        menuOpen
                          ? "translate-y-0 opacity-100"
                          : "translate-y-full opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: menuOpen
                        ? `${120 + index * 80}ms`
                        : "0ms",
                    }}
                  >
                    {item.label}
                  </Link>

                </div>
              );
            })}

          </div>


          {/* =================================
              BOTTOM TEXT
          ================================== */}

          <div
            className={`
              absolute
              bottom-10
              left-8
              right-8
              border-t
              border-white/[0.08]
              pt-5
              transition-all
              duration-700

              ${
                menuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }
            `}
            style={{
              transitionDelay: menuOpen
                ? "450ms"
                : "0ms",
            }}
          >
            <p
              className="
                text-[9px]
                uppercase
                tracking-[0.25em]
                text-gray-600
              "
            >
              AI · Software · Automation
            </p>
          </div>

        </nav>

      </div>

    </header>
  );
};

export default Navbar;