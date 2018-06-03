import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import products from "./productsReducer/productsReducer";

const rootReducers = combineReducers({
  products,
  routing: routerReducer
});

export default rootReducers;
