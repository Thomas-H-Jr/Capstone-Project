import React from "react";
import Button from "./ButtonComponent"
import FoodCard from "./FoodCard"
import TestimonialCard from "./TestimonialCard";
import AboutA from "./Pictures/AboutA.jpg"
import AboutB from "./Pictures/AboutB.jpg"
import heroFood from "./Pictures/heroFood.jpg";


function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="left-column">
        <h1 className="restaurant">Little Lemon</h1>
        <h2 className="city">Chicago</h2>
        <p className="summary">
          We are a family owned Medditerranean restaurant, <br/>focused on
          traditional recipes served with a <br/>modern twist.
        </p>
        <div className="reserve-button">
        <Button>Reserve Table</Button>
        </div>
        </div>
        <img className="hero-image" src={heroFood} alt="food presentation" />
      </section>
      <section className="weekly-specials">
      <div className="specials-header">
      <h2 className="specials-title">This weeks specials!</h2>
      <button className="menu-button" type="button">Online Menu</button>
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
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <article>
          Mollit adipisicing incididunt mollit sunt aute ipsum nostrud ex ipsum pariatur tempor ea cillum nulla. Dolore cupidatat sit ullamco incididunt eu laborum deserunt occaecat ad aliquip consectetur. Veniam nostrud ipsum occaecat et quis irure est ea commodo fugiat quis fugiat veniam duis. Non duis consequat ut irure ea elit ipsum labore.
        </article>
        <img className="about-pic1" src={AboutA} alt=""/>
        <img className="about-pic2" src={AboutB} alt=""/>
      </section>
    </>
  );
}

export default HomePage;
