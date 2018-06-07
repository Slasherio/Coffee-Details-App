import { STARTED_LOAD, LOADED, LOAD_ERROR } from "../../config/constants";

const initialState = {
  fetching: false,
  fetched: false,
  productsData: [],
  error: null
};

export const products = (state = initialState, action) => {
  switch (action.type) {
    case STARTED_LOAD:
      return {
        ...state,
        fetching: true
      };
    case LOADED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        productsData: action.payload.data
      };
    case LOAD_ERROR:
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    default:
      return state;
  }
};
