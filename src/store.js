import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import recipesReducer from "./CookbookApp/redux/recipesReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const appReducer = combineReducers({
  recipes: recipesReducer,
});

const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
