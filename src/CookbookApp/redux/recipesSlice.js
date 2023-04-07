import { createSlice } from "@reduxjs/toolkit";
import { getRecipesList } from "./recipesThunks";

const initialState = {
  recipes: [],
  error: null,
  isLoading: false,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    // fetchRecipesStart(state) {
    //   state.isLoading = true;
    // },
    // fetchRecipesSuccess(state, action) {
    //   state.isLoading = false;
    //   state.recipes = action.payload;
    // },
    // fetchRecipesFailure(state, action) {
    //   state.isLoading = false;
    //   state.error = action.payload;
    // },
    // addRecipe(state, action) {
    //   state.recipes.push(action.payload);
    // },
    // editRecipe(state, action) {
    //   const index = state.recipes.findIndex(
    //     (recipe) => recipe.id === action.payload.id
    //   );
    //   state.recipes[index] = action.payload;
    // },
    // deleteRecipe(state, action) {
    //   state.recipes = state.recipes.filter(
    //     (recipe) => recipe.id !== action.payload
    //   );
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(getRecipesList.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getRecipesList.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.recipes = action.payload;
      })
      .addCase(getRecipesList.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const selectRecipes = (state) => state.recipe.recipes;
// export const selectError = (state) => state.recipe.error;
// export const selectIsLoading = (state) => state.recipe.isLoading;

export default recipeSlice.reducer;
