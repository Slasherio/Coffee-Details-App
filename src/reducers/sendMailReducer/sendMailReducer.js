import { POST_DATA } from "../../config/constants";

export const sendData = (state = {}, action) => {
  switch (action.type) {
    case POST_DATA:
      return {
        ...state,
        data: action.payload,
        responseStatus: "ok"
      };
    default:
      return state;
  }
};
