import { POST_DATA } from "../../config/constants";
import ProductService from "../../config/productService";

const postData = payload => {
  return {
    type: POST_DATA,
    payload
  };
};

export const sendReportData = payload => dispatch => {
  ProductService.sendData(payload).then(data => {
    dispatch(postData(data));
  });
};
