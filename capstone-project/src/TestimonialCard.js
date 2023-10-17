import React from "react";
import Male from "./Pictures/Male.jpg"
import Female from "./Pictures/Female.jpg"


function TestimonialCard() {
  const customerRating = [
        {
          image: Male,
          name: "John",
          rating: "5/5",
          reviewText: '"Best food I have ever had!"',
        },
        {
          image: Female,
          name: "Jane",
          rating: "5/5",
          reviewText: '"Staff was excellent and the food was delectable."',
        },
        {
          image: Male,
          name: "Rick",
          rating: "4/5",
          reviewText: '"Seating wasn\'t the best, but the food was amazing."',
        },
        {
          image: Female,
          name: "Rihanna",
          rating: "5/5",
          reviewText: '"YOU MUST TRY THIS RESTAURANT!!!"',
        }
      ];
      return (
        <>
          {customerRating.map((props, index) => (
            <div className="testimonial-profile" key={index}>
              <img className="testimonial-pic" src={props.image} alt="profile" />
              <h3>Name: {props.name}</h3>
              <h3>Rating: {props.rating}&#9734;</h3>
              <p>{props.reviewText}</p>
            </div>
          ))}
        </>
      );
    }

export default TestimonialCard;