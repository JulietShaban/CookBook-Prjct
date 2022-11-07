import React from "react";
import RecipeReviewCard from "../RecipeReviewCard";

function Receipt({ id, title, text, image, onChange, onDelete}) {
  return (
    <li id={id} >
      <RecipeReviewCard image={image} title={title} text={text} onDelete={onDelete} onEdit={onChange}/>
    </li>
  );
}

export default Receipt;
