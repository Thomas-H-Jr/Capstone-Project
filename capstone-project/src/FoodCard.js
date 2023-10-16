import React from "react";
import greekSalad from "./Pictures/greeksalad.jpg";
import bruchetta from "./Pictures/bruchetta.svg";
import lemonDessert from "./Pictures/lemondessert.jpg";

function FoodCard() {
const specials = [{
image: greekSalad,
dish: "Greek Salad",
description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
},
{
image: bruchetta,
dish: "Bruchetta",
description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
},
{
image: lemonDessert,
dish: "Lemon Dessert",
description: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
}]
return (
    <>
    {specials.map((props, index) => (
        <div key={index}>
          <img src={props.image} alt="weekly specials" />
          <h3>{props.dish}</h3>
          <p>{props.description}</p>
        </div>
      ))}
    </>
)
}

export default FoodCard;