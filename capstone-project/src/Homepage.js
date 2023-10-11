import React from "react";
import heroFood from "./heroFood.jpg";
import greekSalad from "./greeksalad.jpg";
import bruchetta from "./bruchetta.svg";
import lemonDessert from "./lemondessert.jpg";

function Homepage() {
  return (
    <>
      <section className="hero-section">
        <h1 className="restaurant">Little Lemon</h1>
        <h2 className="city">Chicago</h2>
        <p className="summary">
          We are a family owned Medditerranean restaurant, focused on
          traditional recipes served with a modern twist.
        </p>
        <img className="hero-image" src={heroFood} alt="food presentation" />
      </section>
      <>
        <h3>This weeks specials!</h3>
      </>
      <section className="weekly-specials">
        <article className="card1">
          <img className="salad" src={greekSalad} />
          <h4>Greek Salad</h4>
          <p>
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
        </article>
        <article className="card2">
          <img className="bruchetta" src={bruchetta} />
          <h4>Bruchetta</h4>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
        </article>
        <article className="card3">
          <img className="lemon-dessert" src={lemonDessert} />
          <h4>Lemon Dessert</h4>
          <p>
            This comes straight from grandma’s recipe book, every last
            ingredient has been sourced and is as authentic as can be imagined.
          </p>
        </article>
      </section>
      <section className="testimonials">
        <h3>Testimonials</h3>
      </section>
      <section className="about-section">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
      </section>
    </>
  );
}

export default Homepage;
