import React from "react";

function Footer() {
  return (
    <>
    <div className="footer">
      <section className="footer1">
      <h3>Little Lemon</h3>
        <ul className="footer-nav">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/reservations">Reservations</a>
          </li>
          <li>
            <a href="/order-online">Order Online</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </section>
        <section className="footer2">
        <h3>Contact Us</h3>
        <ul className="contact-us">
          <li>
            <a href="#phone">Phone</a>
          </li>
          <li>
            <a href="#address">Address</a>
          </li>
          <li>
            <a href="#email">Email</a>
          </li>
        </ul>
        </section>
        <section className="footer3">
        <h3>Social Media</h3>
        <ul className="socials">
          <li>
            <a href="#twitter">Twitter</a>
          </li>
          <li>
            <a href="instagram">Instagram</a>
          </li>
          <li>
            <a href="facebook">facebook</a>
          </li>
        </ul>
        </section>
        </div>
    </>
  );
}

export default Footer;
