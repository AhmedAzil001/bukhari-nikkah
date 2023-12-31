import React from "react";
import logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";
import "./Mobile.css";

const MobileNavbar = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <div className="mobile-logo-container">
            <img src={logo} alt="Bukhari Nikkah" className="mobile-logo" />
          </div>
          <div className="mobile-contents">
            <Link className="mobile-btn" to={"/"} >
              Home
            </Link>

            <Link className="mobile-btn" to={"/about"}>
              About
            </Link>

            <Link className="mobile-btn" to={"/pricing"}>
              Pricing
            </Link>
          </div>

          <div className="mobile-buttons">
            <button className="-mobile-btn-login">
              <Link to={"/login"}>Login</Link>
            </button>
            <button className="mobile-btn-register">
              <Link to={"/register"}>Register</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
