import React from "react";
import { Link } from "react-router-dom";
import logo from "./Pictures/Logo.svg";
import Hamburger from "./Pictures/HamburgerIcon.svg";

function Header() {
  return (
    <>
      <Link to="/">
        <img className="logo" src={logo} alt="Logo" />
      </Link>
      <div className="mobile-header">
        <div className="hamburger">
          <img src={Hamburger} alt="mobile menu icon" />
        </div>
        <div className="mobile-logo">
          <img src={logo} alt="mobile logo" />
        </div>
      </div>
    </>
  );
}

export default Header;
