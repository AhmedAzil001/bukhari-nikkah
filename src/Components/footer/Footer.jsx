import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Logo.jpg";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <Link to={"/"}>
          <img className="footer-img" src={logo} alt="Bukhari Nikkah" />
        </Link>
        <button className="footer-btn">@bukharinikkah</button>
      </div>
    </div>
  );
};

export default Footer;
