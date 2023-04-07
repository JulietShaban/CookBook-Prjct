import { configureStore } from "@reduxjs/toolkit";

import recipesReducer from "./CookbookApp/redux/recipesSlice";

export default configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
