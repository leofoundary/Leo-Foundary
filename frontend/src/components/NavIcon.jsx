import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavIcon = () => {
  const location = useLocation();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Products", path: "/products" },
    { label: "Contact Us", path: "/contact" },
    { label: "About", path: "/about" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }

    return location.pathname.startsWith(path);
  };

  return (
    <nav className="main-nav">
      {navItems.map((item) => {
        const active = isActive(item.path);

        return (
          <Link
            key={item.path}
            to={item.path}
            className={`main-nav-link ${
              active ? "main-nav-link-active" : ""
            }`}
          >
            <span className="main-nav-window">
              <span className="main-nav-track">
                <span className="main-nav-label">
                  {item.label}
                </span>

                <span className="main-nav-label">
                  {item.label}
                </span>
              </span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavIcon;