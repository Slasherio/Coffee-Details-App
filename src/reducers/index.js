import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { products } from "./productsReducer/productsReducer";
import { productDetail } from "./productDetailReducer/productDetailReducer";
import { sendData } from "./sendMailReducer/sendMailReducer";

const rootReducers = combineReducers({
  products,
  productDetail,
  sendData,
  routing: routerReducer
});

export default rootReducers;
