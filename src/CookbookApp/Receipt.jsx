import React from "react";
import RecipeReviewCard from "../RecipeReviewCard";

function Receipt({ id, title, text, image, onChange, handleDelete}) {
  return (
    <li className="unordered_list_item" id={id} >
      <RecipeReviewCard image={image} title={title} text={text} handleDelete={handleDelete} onEdit={onChange}/>
    </li>
  );
}

export default Receipt;
