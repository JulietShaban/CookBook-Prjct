import React from "react";
import RecipeReviewCard from "../RecipeReviewCard";

function Receipt({ id, title, text, image, onChange, onDelete}) {
  return (
    <li id={id}>
      {/* <h4>{title}</h4>
      <button onClick={onDelete} className="buttons-common">
        <i class=" material-icons">delete</i>
      </button>
      <button onClick={onChange}  className="buttons-common">
        <i class=" material-icons">edit</i>
      </button> */}
      <RecipeReviewCard image={image} title={title} text={text}/>
    </li>
  );
}

export default Receipt;
