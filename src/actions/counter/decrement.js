import { DECREMENT } from "../../config/constants";
import store from "../../store/store";

export const decrement = payload => dispatch => {
  dispatch({
    type: DECREMENT,
    payload
  });
};
export const dispatchDecrementPayloadWired = payload =>
  decrement(payload)(store.dispatch);
