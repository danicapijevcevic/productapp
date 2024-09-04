import { LOGGEDIN, USER, THEME, PRODUCTS, TOGGLE_CART, CART_PRODUCTS } from "./types";

const action = (type) => (value) => ({ type, value });
export const setLoggedin = action(LOGGEDIN);
export const setUser = action(USER);
export const setTheme = action(THEME);
export const setToggleCart = action(TOGGLE_CART)
export const setCartProducts = action(CART_PRODUCTS)
export const setProducts = (dispatch) =>
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => dispatch({ type: PRODUCTS, value: res }));
