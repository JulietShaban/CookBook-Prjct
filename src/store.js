import { createStore, combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import usersReducer from "./users.reducer";

const addReducer = combineReducers({
  counter: counterReducer,
  users: usersReducer,
});

const store = createStore(
    addReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;
