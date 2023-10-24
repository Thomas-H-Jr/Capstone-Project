import React from "react";
import MenuSymbol from "./Pictures/MenuSymbol.png";

function MenuPage() {
  return (
    <>
      <section className="menu-group">
        <img src={MenuSymbol} alt="menu icon" className="menu-image" />
      </section>
    </>
  );
}

export default MenuPage;
