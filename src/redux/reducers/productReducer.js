import { ActionTypes } from "../constants/action-types";

const initial = {
  products: [],
};
export const productReducer = (state = initial, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: payload };
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECT_PRODUCT_THUNK:
      return payload;
    case ActionTypes.SELECTED_PRODUCT:
      return payload;
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
