import React from "react";
import Logo2 from "./Pictures/Logo2.png";

function LogoScroll() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  return (
    <div className="logo2">
      <a href="/">
        <img src={Logo2} alt="footer logo" />
      </a>
    </div>
  );
}

export default LogoScroll;
