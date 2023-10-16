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
        <h1 className="restaurant">Little Lemon</h1>
        <h2 className="city">Chicago</h2>
        <p className="summary">
          We are a family owned Medditerranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <Button className="reserve-button">Reserve Table</Button>
        <img className="hero-image" src={heroFood} alt="food presentation" />
      </section>
      <section className="weekly-specials">
      <h2 className="specials-title">This weeks specials!</h2>
     <FoodCard />
      </section>
      <section className="testimonials">
        <h2 className="specials-title">Testimonials</h2>
        <TestimonialCard />
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
