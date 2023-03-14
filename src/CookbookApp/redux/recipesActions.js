import * as recipesGateway from "../RecipesGateway";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const RECIPES_LIST_RECIEVED = "RECIPES_LIST_RECIEVED";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const EDIT_RECIPE = "EDIT_RECIPE";

export const recipesListRecieved = (recipesList) => {
  return {
    type: RECIPES_LIST_RECIEVED,
    payload: {
      recipesList,
    },
  };
};

export const getRecipesList = () => {
  const thunkAction = (dispatch) => {
    recipesGateway
      .fetchRecipesList()
      .then((recipesList) => dispatch(recipesListRecieved(recipesList)));
  };
  return thunkAction;
};

export const updateRecipe = (recipeId, newRecipeData) => {
  const thunkAction = function (dispatch) {
    const updatedRecipe = {
      id: recipeId,
      ...newRecipeData,
    };

    recipesGateway
      .updateRecipe(recipeId, updatedRecipe)
      .then(() => dispatch(editRecipeAction(recipeId, updatedRecipe)));
  };
  return thunkAction;
};

const createRecipeAction = (recipeData) => {
  
  return {
    type: CREATE_RECIPE,
    payload: { recipeData },
  };
};
const editRecipeAction = (recipeId, updatedRecipe) => {
  return {
    type: EDIT_RECIPE,
    payload: { recipeId, updatedRecipe },
  };
};
const deleteRecipeAction = (recipeId) => {
  return {
    type: DELETE_RECIPE,
    payload: { recipeId },
  };
};

export const removeRecipe = (recipeId) => {
  const thunkAction = (dispatch) =>
    recipesGateway.deleteRecipe(recipeId).then(() => {
      dispatch(deleteRecipeAction(recipeId));
    });
  return thunkAction;
};

export const createRecipe = (data) => (dispatch) => {
  recipesGateway
    .createRecipe(data)
    .then((res) => dispatch(createRecipeAction(res)));
};
