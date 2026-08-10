import React from 'react';
import "../style/Navbar.css";
import { Link } from 'react-router-dom';
const NavIcon = () => {
  return (
    <div className="flex items-center gap-15 text-[1.2rem]">
        <Link to="/" className="nav-link">
          <span>Home</span>
          <span>Home</span>
        </Link>
        <Link to="/testimonials" className="nav-link">
          <span>Testimonials</span>
          <span>Testimonials</span>

        </Link>
        <Link to="/services" className="nav-link">
          <span>Services</span>
          <span>Services</span>

        </Link>
        <Link to="/contact" className="nav-link">
          <span>Contact Us</span>
          <span>Contact Us</span>

        </Link>
        <Link to="/about" className="nav-link">
          <span>About</span>
          <span>About</span>

        </Link>
      </div>
  );
};

export default NavIcon;