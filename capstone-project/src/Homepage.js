import React from "react";
import FoodCard from "./FoodCard";
import TestimonialCard from "./TestimonialCard";
import AboutA from "./Pictures/AboutA.jpg";
import AboutB from "./Pictures/AboutB.jpg";
import heroFood from "./Pictures/heroFood.jpg";

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="left-column">
          <h1 className="restaurant">Little Lemon</h1>
          <h2 className="city">Chicago</h2>
          <p className="summary">
            We are a family owned Medditerranean restaurant, <br />
            focused on traditional recipes served with a <br />
            modern twist.
          </p>
          <button className="reserve-button" type="button">
            Reserve Table
          </button>
        </div>
        <img className="hero-image" src={heroFood} alt="food presentation" />
      </section>
      <section className="weekly-specials">
        <div className="specials-header">
          <h2 className="specials-title">This weeks specials!</h2>
          <button className="menu-button" type="button">
            Online Menu
          </button>
        </div>
        <div className="foodcard">
          <FoodCard />
        </div>
      </section>
      <section className="testimonials">
        <h2 className="testimonial-title">Testimonials</h2>
        <div className="testimonial-card">
          <TestimonialCard />
        </div>
      </section>
      <section className="about-section">
        <div className="about-column">
          <h2 className="about-title">Little Lemon</h2>
          <h3 className="about-city">Chicago</h3>
          <article className="about-article">
            Little Lemon is a charming Mediterranean gem nestled in the heart of Chicago. This
            restaurant exudes the essence of the Mediterranean with its warm, rustic ambiance and
            delectable cuisine. The moment you step inside, you're enveloped by the enticing aroma
            of freshly baked pita bread and savory spices. Little Lemon's menu offers a delightful
            array of Mediterranean delicacies.
          </article>
        </div>
        <div className="about-pic-column">
          <img className="about-pic1" src={AboutA} alt="" />
          <img className="about-pic2" src={AboutB} alt="" />
        </div>
      </section>
    </>
  );
}

export default HomePage;
