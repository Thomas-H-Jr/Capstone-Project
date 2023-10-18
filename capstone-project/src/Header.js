import React from "react";
import logo from "./Pictures/Logo.svg";
// import Hamburger from "./Pictures/HamburgerIcon.svg"

function Header() {
  return (
    <>
    <a href="/">
      <img className="logo" src={logo} alt="Logo" />
    </a>
    {/* <div className="mobile-header">
    <img src={Hamburger} alt="mobile icon"></img>
    </div> */}
    </>
  );
}

export default Header;
