import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ProductsData from "./data";

const reducer = (state, acion) => {
  return state;
};

const initState = {
  products: ProductsData,
};

export default createStore(reducer, initState, composeWithDevTools());
