export const ADD_CART_ITEM = "ADD_CART_ITEM";
export const DELETE_CART_ITEM = "DELETE_CART_ITEM";
export const INCREASE_ITEM_QUANTITY = "INCREASE_ITEM_QUANTITY";
export const DECREASE_ITEM_QUANTITY = "DECREASE_ITEM_QUANTITY";
export const GET_TOTAL_ITEM_PRICE = "GET_TOTAL_ITEM_PRICE";

interface Payload {
  [key: string]: any;
}

export const add_cart_item = (payload: Payload) => ({ type: ADD_CART_ITEM, payload });
export const delete_cart_item = (payload: Payload) => ({ type: DELETE_CART_ITEM, payload });
export const increase_item_quantity = (payload: Payload) => ({ type: INCREASE_ITEM_QUANTITY, payload });
export const decrease_item_quantity = (payload: Payload) => ({ type: DECREASE_ITEM_QUANTITY, payload });
export const get_total_item_price = () => ({ type: GET_TOTAL_ITEM_PRICE });
