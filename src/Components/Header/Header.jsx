import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../assets/name.jpg";
import { AiOutlineMenuFold,AiOutlineMenuUnfold } from "react-icons/ai";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
    <MobileNavbar isOpen={menuOpen} toggleMenu={handleMenuToggle}/>
    <nav className="header">
      <Link to={"/"}>
      <div className="logo">
          <img className="header-img" src={logo}alt="Logo" />
        </div>
      </Link>
      <div className="contents">
        <Link className="contents-hover" to={"/"}>
          Home
        </Link>
        <Link className="contents-hover" to={"/about"}>
          About
        </Link>
        <Link className="contents-hover" to={"/pricing"}>
          Pricing
        </Link>
      </div>
      
      <div className="buttons">
        <button className="btn-login">
          <Link to={"/login"}>Login</Link>
        </button>
        <button className="btn-register">
          <Link to={"/register"}>Register</Link>
        </button>
      </div>

      <button className="menu-toggle" onClick={handleMenuToggle}>
        {menuOpen? <AiOutlineMenuFold  size={'30'}/> :  <AiOutlineMenuUnfold size={'30'}/>}
      </button>
    </nav>
    </>
  );
};

export default Header;
