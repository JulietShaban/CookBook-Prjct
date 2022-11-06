import { createStore, combineReducers } from "redux";

import receiptsReducer from "./CookbookApp/redux/receipts.reducer";

const appReducer = combineReducers({
  receipts: receiptsReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
