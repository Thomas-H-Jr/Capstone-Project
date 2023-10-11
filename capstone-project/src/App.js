import React from "react";
import "./styles.css";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import heroFood from "./heroFood.jpg";

function App() {
  return (
    <>
      <div className="navbar">
        <Header />
        <Nav />
      </div>
      <section className="hero-section">
        <h1 className="restaurant">Little Lemon</h1>
        <h2 className="city">Chicago</h2>
        <p className="summary">
          We are a family owned Medditerranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <img src={heroFood} alt="food presentation" />
      </section>
      <section className="weekly-specials">
        <h3>This weeks specials!</h3>
      </section>
      <section className="testimonials">
        <h3>Testimonials</h3>
      </section>
      <section className="about-section">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
      </section>
      <Footer />
    </>
  );
}

export default App;
