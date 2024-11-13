import { combineReducers } from "redux";
import { productReducer, selectedProduct, productCart } from "./ProductReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProduct,
});

export default reducers;
