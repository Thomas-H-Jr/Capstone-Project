import React from "react";
import logo from "./Pictures/Logo.svg";

function Header() {
  return (
    <a href="/">
      <img className="logo" src={logo} alt="Logo" />
    </a>
  );
}

export default Header;
