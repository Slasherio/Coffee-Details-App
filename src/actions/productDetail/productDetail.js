import ProductsService from "../../config/productService";
import {
  FETCHING_PRODUCT_DETAIL,
  FETCHED_PRODUCT_DETAIL
} from "../../config/constants";

const fetchingProductDetail = payload => {
  return {
    type: FETCHING_PRODUCT_DETAIL,
    payload
  };
};

const fetchedProductDetail = payload => {
  return {
    type: FETCHED_PRODUCT_DETAIL,
    payload
  };
};

export const getProductDetail = id => dispatch => {
  dispatch(fetchingProductDetail(id));
  ProductsService.getProductById(id).then(data =>
    setTimeout(() => dispatch(fetchedProductDetail(data)), 3000)
  );
};
