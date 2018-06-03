import { fetchingError, receiveData, fetching } from "../common";
import store from "../../store/store";
import ProductsService from "../../config/productService";

export const getAllProducts = () => dispatch => {
  dispatch(fetching());
  return ProductsService.getAllProducts()
    .then(products => dispatch(receiveData(products)))
    .catch(error => dispatch(fetchingError(error)));
};

export const dispatchGetAllProductsWired = () => {
  getAllProducts()(store.dispatch);
};
