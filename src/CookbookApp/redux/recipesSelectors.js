export const recipesListSelector = (state) => state.recipes.recipesList;



export const recipeSelector = (id) => (state) =>
  state.recipes.recipesList.find((recipe) => recipe.id === id);
