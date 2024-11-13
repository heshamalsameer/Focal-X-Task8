import { Action_Types } from "./Action_Types";

export function setProducts(productInfo) {
  return {
    type: Action_Types.SET_PRODUCTS,
    productInfo: productInfo,
  };
}
export function setProduct(productInfo) {
  return {
    type: Action_Types.SET_PRODUCT,
    productInfo: productInfo,
  };
}
export function updateProduct(productInfo) {
  return {
    type: Action_Types.UPDATE_PRODUCT,
    productInfo: productInfo,
  };
}
export function deleteProduct(productInfo) {
  return {
    type: Action_Types.DELETE_PRODUCT,
    productInfo: productInfo,
  };
}
