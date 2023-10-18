import React from "react";
import logo from "./Pictures/Logo.svg";
import Hamburger from "./Pictures/HamburgerIcon.svg"

function Header() {
  return (
    <>
    <a href="/">
      <img className="logo" src={logo} alt="Logo" />
    </a>
    <div className="mobile-header">
      <div className="hamburger">
    <img src={Hamburger} alt="mobile menu icon" />
    </div>
    <div className="mobile-logo" >
    <img src={logo} alt="mobile logo" />
    </div>
    </div>
    </>
  );
}

export default Header;
