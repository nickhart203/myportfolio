import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Download from "./Resume.js";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <div className="container">
      <div className="navContainer">
        <div className="logo line-link inline-block">
          <Link to="/">Nick Hart </Link>
        </div>
        <div className="nav-items inline-block">
          <div className="nav-item line-link">
            <Link to="/about">About</Link>
          </div>
          <div className="nav-item line-link">
            <Link to="./resume_nickhart.pdf" target="_blank">
              <Download></Download>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
