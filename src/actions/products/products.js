import { fetchingError, receiveData, fetching } from "../common";
import ProductsService from "../../config/productService";

export const getAllProducts = () => async dispatch => {
  dispatch(fetching());
  ProductsService.getAllProducts()
    .then(data => setTimeout(() => dispatch(receiveData(data)), 3000))
    .catch(error => dispatch(fetchingError(error)));
};
