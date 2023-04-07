import { createAsyncThunk } from "@reduxjs/toolkit";

import * as recipesGateway from "../RecipesGateway";
export const DELETE_RECIPE = "DELETE_RECIPE";
// export const RECIPES_LIST_RECIEVED = "RECIPES_LIST_RECIEVED";
export const CREATE_RECIPE = "CREATE_RECIPE";

export const getRecipesList = createAsyncThunk(
  "GET_RECIPES_LIST",
  async (userId, thunkAPI) => {
    const res = await recipesGateway.fetchRecipesList();

    return res;
  }
);

// export const updateRecipe = (recipeId, newRecipeData) => {
//   const thunkAction = function (dispatch) {
//     const updatedRecipe = {
//       id: recipeId,
//       ...newRecipeData,
//     };

//     recipesGateway
//       .updateRecipe(recipeId, updatedRecipe)
//       .then(() => dispatch(editRecipeAction(recipeId, updatedRecipe)));
//   };
//   return thunkAction;
// };

// export const removeRecipe = (recipeId) => {
//   const thunkAction = (dispatch) =>
//     recipesGateway.deleteRecipe(recipeId).then(() => {
//       dispatch(deleteRecipeAction(recipeId));
//     });
//   return thunkAction;
// };

// export const createRecipe = (data) => (dispatch) => {
//   recipesGateway
//     .createRecipe(data)
//     .then((res) => dispatch(createRecipeAction(res)));
// };

// export const getRecipesList = () => {
//     const thunkAction = (dispatch) => {
//       recipesGateway
//         .fetchRecipesList()
//         .then((recipesList) => dispatch(recipesListRecieved(recipesList)));
//     };
//     return thunkAction;
//   };
