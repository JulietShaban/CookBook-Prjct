import React from "react";
import RecipeReviewCard from "../RecipeReviewCard";

function Receipt({ id, title, text, picture }) {
  return (
    <li className="unordered_list_item" id={id}>
      <RecipeReviewCard id={id} image={picture} title={title} text={text} />
    </li>
  );
}

export default Receipt;
