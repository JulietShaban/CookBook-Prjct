import { EDIT_RECIPE, RECIPES_LIST_RECIEVED } from "./recipesActions";
import { DELETE_RECIPE } from "./recipesActions";
import { CREATE_RECIPE } from "./recipesActions";
const initialState = {
  recipesList: [],
};

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECIPES_LIST_RECIEVED:
      return {
        ...state,
        recipesList: action.payload.recipesList,
      };
    case DELETE_RECIPE: {
      const newList = state.recipesList.filter((recipe) => {
        return recipe.id !== action.payload.recipeId;
      });
      return {
        ...state,
        recipesList: newList,
      };
    }
    case CREATE_RECIPE: {
      return {
        ...state,
        recipesList: [...state.recipesList, action.payload.recipeData],
      };
    }

    case EDIT_RECIPE: {
      const newList = state.recipesList.map((recipe) => {
        if (recipe.id === action.payload.recipeId) {
          return action.payload.updatedRecipe;
        }
        return recipe;
      });
      return {
        ...state,
        recipesList: newList,
      };
    }

    default:
      return state;
  }
};

export default recipesReducer;
