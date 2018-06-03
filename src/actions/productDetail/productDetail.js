import { fetchingError, receiveData, fetching } from "../common";
import store from "../../store/store";
import ProductsService from "../../config/productService";

export const getProductDetail = id => dispatch => {
  dispatch(fetching());
  return ProductsService.getProductById(id)
    .then(data => dispatch(receiveData(data)))
    .catch(error => dispatch(fetchingError(error)));
};

export const dispatchGetProductDetailWired = payload => {
  getProductDetail(payload)(store.dispatch);
};
