import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer/counterReducer";

const rootReducers = combineReducers({
  counterReducer,
  routing: routerReducer
});

export default rootReducers;
