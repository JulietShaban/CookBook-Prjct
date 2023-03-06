import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import FavoriteIcon from "@mui/icons-material/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { removeRecipe } from "./CookbookApp/redux/receiptsActions";
import { useDispatch } from "react-redux";
import { ClassNames } from "@emotion/react";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const RecipeReviewCard = ({ title, text, image, id }) => {
  const [expanded, setExpanded] = React.useState(false);

  const dispatch = useDispatch();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDelete = (id) => {
    dispatch(removeRecipe(id));
  };

  return (
    <Card >
      <CardHeader 
        action={
          <Link to={`edit/${id}`}>
            <IconButton aria-label="edit">
              <EditIcon />
            </IconButton>
          </Link>
        }
        title={title}
      />
      <CardMedia component="img" height="170" image={image} alt="Food photo" />

      <CardActions disableSpacing>
        {
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
        }
        <IconButton onClick={() => handleDelete(id)} aria-label="delete">
          <DeleteIcon />
        </IconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Ingredients:</Typography>
          <Typography>{text}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeReviewCard;
