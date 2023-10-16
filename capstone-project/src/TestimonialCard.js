import React from "react";

function TestimonialCard() {
    const customerRating = [
        {
          name: "John",
          rating: "5/5",
          reviewText: "Best food I have ever had!",
        },
        {
          name: "Jane",
          rating: "5/5",
          reviewText: "Staff was excellent and the food was delectable",
        },
        {
          name: "Rick",
          rating: "4/5",
          reviewText: "Seating wasn't the best, but the food was amazing.",
        },
        {
          name: "Rihanna",
          rating: "5/5",
          reviewText: "YOU MUST TRY THIS RESTAURANT!!!",
        }
      ];
      return (
        <>
          {customerRating.map((props, index) => (
            <div key={index}>
              <h3>Name: {props.name}</h3>
              <h3>Rating: {props.rating}</h3>
              <p>Testimonial: {props.reviewText}</p>
            </div>
          ))}
        </>
      );
    }

export default TestimonialCard;