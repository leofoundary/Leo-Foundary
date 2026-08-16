import React from "react";
import "../style/HomeButton.css";
import { Link } from "react-router-dom";

const HomeButton = ({ href, text, hoverText }) => {
  return (
    <Link to={href} className="hero-btn">
      <span className="btn-text-wrap">
        <span className="btn-text btn-current">
          {text}
        </span>

        <span className="btn-text btn-hover">
          {hoverText}
        </span>
      </span>

      <span className="btn-arrow">
        →
      </span>
    </Link>
  );
};

export default HomeButton;