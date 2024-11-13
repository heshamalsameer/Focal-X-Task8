import { Action_Types } from "../actions/Action_Types";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case Action_Types.SET_PRODUCTS:
      return {
        ...state,
        products: action.productInfo,
      };
    case Action_Types.SET_PRODUCT:
      return {
        ...state,
        products: [action.productInfo],
      };
    case Action_Types.UPDATE_PRODUCT:
      return {
        ...state,
        products: products.map((item, index) => {
          return item.id == action.productInfo.id ? action.productInfo : item;
        }),
      };
    case Action_Types.DELETE_PRODUCT:
      return {
        ...state,
        products: products.filter((item, index) => {
          return item.id != action.productInfo.id;
        }),
      };

    default:
      return state;
  }
};
