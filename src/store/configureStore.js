import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = (state, acion) => {
  return state;
};

const initState = {};

export default createStore(reducer, initState, composeWithDevTools());
