import { combineReducers } from "redux";
import {
  LOGGEDIN,
  PRODUCTS,
  THEME,
  USER,
  TOGGLE_CART,
  CART_PRODUCTS,
} from "./types";

const initialAuthState = {
  loggedin: true,
  user: null,
  theme: "light",
  products: null,
  showCart: false,
};
const initialProductsState = {
  products: null,
  cartproducts: null,
};
const authReducer = (state = initialAuthState, { type, value }) => ({
  ...state,
  ...{
    [LOGGEDIN]: { loggedin: value },
    [USER]: { user: value },
    [THEME]: { theme: value },
    [PRODUCTS]: { products: value },
    [TOGGLE_CART]: { showCart: value },
  }[type],
});
const productsReducer = (state = initialProductsState, { type, value }) => ({
  ...state,
  ...{
    [CART_PRODUCTS]: { cartproducts: value },
  }[type],
});

const allReducers = combineReducers({
  authReducer,
 productsReducer,
});

export default allReducers;
