import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <ul className="nav">
        <li>
          <Link to="home">Home</Link>
        </li>

        <li>
          <Link to="about">About</Link>
        </li>

        <li>
          <Link to="menu">Menu</Link>
        </li>
        <li>
          <Link to="reservations">Reservations</Link>
        </li>
        <li>
          <Link to="order-online">Order Online</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
    </>
  );
}

export default Nav;
