import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import ProductsData from "./data";

const reducer = (state, action) => {
  if (action.type === "HANDLE_DETAILS") {
    return { ...state, select_details: action.id };
  }

  return state;
};

const initState = {
  products: ProductsData,
  select_details: ProductsData[0].id,
};

export default createStore(reducer, initState, composeWithDevTools());
