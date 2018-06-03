import { STARTED_LOAD, LOADED, LOAD_ERROR } from "../../config/constants";

export const fetchingError = error => {
  return {
    type: LOAD_ERROR,
    payload: error
  };
};

export const fetching = () => {
  return {
    type: STARTED_LOAD
  };
};

export const receiveData = data => {
  return {
    type: LOADED,
    payload: data
  };
};
