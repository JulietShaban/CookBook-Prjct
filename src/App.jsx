import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route } from "react-router-dom";

// import * as recipesActions from "./CookbookApp/redux/recipesActions";
// import { recipesListSelector } from "./CookbookApp/redux/recipesSelectors";
import CreateEditForm from "./CreateEditForm";
import CookingHistory from "./CookbookBlog/CookingHistory";
// import Favorites from "./FavRecipes/Favorites";
import RecipeSlides from "./RecipeSlides";
import Navigation from "./Navigation/Navigation";
import RandomRecipe from "./CookbookBlog/RandomRecipe";
import { ThemeProvider, createTheme } from "@mui/material";
import { brown } from "@mui/material/colors";
// import RecipeReviewCard from "./RecipeReviewCard";
import { selectRecipes } from "./CookbookApp/redux/recipesSelectors";
import { getRecipesList } from "./CookbookApp/redux/recipesThunks";

const App = () => {
  const dispatch = useDispatch();
  const recipesList = useSelector(selectRecipes);
  console.log(recipesList);
  const theme = createTheme({
    palette: {
      primary: {
        main: brown[400],
      },
    },
  });

  useEffect(() => {
    dispatch(getRecipesList());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Route path="/">
        <Navigation />
        <CookingHistory />
        <RandomRecipe recipesList={recipesList} />
        <CookingHistory />
        {/* <RecipeSlides recipesList={recipesList} /> */}
        <Route path="/create">
          <CreateEditForm />
        </Route>
        <Route path="/edit/:id">
          <CreateEditForm />
        </Route>
        {/* <Route path="/favorites">
        <Favorites recipesList={recipesList} />
      </Route> */}
      </Route>
    </ThemeProvider>
  );
};

export default App;
