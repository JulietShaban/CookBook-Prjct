import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import receiptsReducer from "./CookbookApp/redux/receipts.reducer";

const appReducer = combineReducers({
  receipts: receiptsReducer,
});



const composeEnhancers = window.REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
