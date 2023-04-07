

export const selectRecipes = (state) => {
  return state.recipes.recipes;
};

export const recipeSelector = (id) => (state) =>
  state.recipes.recipesList.find((recipe) => recipe.id === id);
