import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";

import { removeRecipe } from "../CookbookApp/redux/recipesThunks";

const RecipeCard = ({ title, text, image, id, favoriteRecipe }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeRecipe(id));
  };
  return (
    <figure className="recipe__card">
      <div className="recipe__card_header">
        <span className="recipe__card_header__title">{title}</span>
        <IconButton
          color="primary"
          aria-label="add to favorites"
          onClick={console.log("this button must add to favorites")}
        >
          <FavoriteIcon />
        </IconButton>
        <Link to={`edit/${id}`}>
          <IconButton color="primary" aria-label="edit">
            <EditIcon />
          </IconButton>
        </Link>
        <IconButton
          color="primary"
          onClick={() => handleDelete(id)}
          aria-label="delete"
        >
          <DeleteIcon />
        </IconButton>
      </div>
      <span className="recipe__card_info">{text}</span>
      <img className="recipe__card_image" src={image} alt="Recipe appearence" />
    </figure>
  );
};

export default RecipeCard;
