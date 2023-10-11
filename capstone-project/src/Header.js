import React from "react";
import logo from "./Logo.svg";

function Header() {
  return (
    <a href="/Homepage">
      <img className="logo" src={logo} alt="Logo" />
    </a>
  );
}

export default Header;
