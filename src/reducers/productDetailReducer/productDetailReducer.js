import {
  FETCHING_PRODUCT_DETAIL,
  FETCHED_PRODUCT_DETAIL
} from "../../config/constants";

const initialState = {
  productDetail: {},
  productDetailData: [],
  error: null
};

export const productDetail = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_PRODUCT_DETAIL:
      return {
        ...state,
        loading: true
      };
    case FETCHED_PRODUCT_DETAIL:
      return {
        ...state,
        loading: false,
        productDetail: action.payload.product,
        productDetailData: action.payload.data
      };
    default:
      return state;
  }
};
