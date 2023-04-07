import * as React from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";

import EditIcon from "@mui/icons-material/Edit";

import { Link } from "react-router-dom";
import { removeRecipe } from "./CookbookApp/redux/recipesThunks";
import { useDispatch } from "react-redux";

const RecipeReviewCard = ({ title, text, image, id, favoriteRecipe }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(removeRecipe(id));
  };

  return (
    <Card width="400">
      <CardHeader
        action={
          <>
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
            {
              <IconButton
                color="primary"
                aria-label="add to favorites"
                onClick={console.log("hi")}
              >
                <FavoriteIcon />
              </IconButton>
            }
          </>
        }
        title={title}
      />

      <CardMedia
        component="img"
        height="175"
        image={
          "https://i.pinimg.com/originals/16/7d/ff/167dffbf18e153bc91706afac16ffc4f.jpg"
        }
        alt="Food photo"
      />

      <Typography color="primary" font="Arial">
        {text}
      </Typography>
    </Card>
  );
};

export default RecipeReviewCard;
