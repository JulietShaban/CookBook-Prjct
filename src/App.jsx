import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Route } from "react-router-dom";
import * as recipesActions from "./CookbookApp/redux/recipesActions";
import { recipesListSelector } from "./CookbookApp/redux/recipesSelectors";
import CreateEditForm from "./CreateEditForm";
import CookingHistory from "./CookbookBlog/CookingHistory";
import Favorites from "./FavRecipes/Favorites";
import RecipeSlides from "./RecipeSlides";
import Navigation from "./Navigation/Navigation";

const App = () => {
  const dispatch = useDispatch();
  const recipesList = useSelector(recipesListSelector);

  useEffect(() => {
    dispatch(recipesActions.getRecipesList());
  }, [dispatch]);

  return (
    <Route path="/">
      <Navigation />
      <CookingHistory />
      <RecipeSlides recipesList={recipesList} />
      <Route path="/create">
        <CreateEditForm />
      </Route>
      <Route path="/edit/:id">
        <CreateEditForm />
      </Route>
      <Route path="/favorites">
        <Favorites recipesList={recipesList} />
      </Route>

     
    </Route>
  );
};

export default App;
