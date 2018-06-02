import { INCREMENT } from "../../config/constants";
import store from "../../store/store";

export const increment = payload => dispatch => {
  dispatch({
    type: INCREMENT,
    payload
  });
};

export const dispatchIncrementPayloadWired = payload =>
  increment(payload)(store.dispatch);
