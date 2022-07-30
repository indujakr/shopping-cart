import fakeStoreApi from "../../api/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispatch) => {
  const response = await fakeStoreApi
    .get("/products")
    .catch((err) => console.log("Error :", err));
  dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectProductThunk = (id) => async (dispatch) => {
  const response = await fakeStoreApi
    .get(`/products/${id}`)
    .catch((err) => console.log("Error :", err));
  dispatch({ type: ActionTypes.SELECT_PRODUCT_THUNK, payload: response.data });
};

export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: products,
  };
};

export const removeProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
