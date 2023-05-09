import {
  ADD_CART_ITEM,
  DECREASE_ITEM_QUANTITY,
  DELETE_CART_ITEM,
  GET_TOTAL_ITEM_PRICE,
  INCREASE_ITEM_QUANTITY,
} from "./CartConstant";

interface CartItem {
  id: string;
  name: string;
  price: number;
  currentQuantity?: number;
}

interface CartStore {
  cartData: CartItem[];
  totalPrice: number;
}

interface CartAction {
  type: string;
  payload: any;
}

const initialState: CartStore = {
  cartData: [],
  totalPrice: 0
};

export const CartReducer = (store: CartStore = initialState, { type, payload }: CartAction) => {
  switch (type) {
    case ADD_CART_ITEM:
      return { ...store, cartData: [...addToCart(store, payload)] };
    case DELETE_CART_ITEM:
      return { ...store, cartData: [...deleteItem(store, payload)] };
    case INCREASE_ITEM_QUANTITY:
      return { ...store, cartData: [...incrementQuantity(store.cartData, payload)] };
    case DECREASE_ITEM_QUANTITY:
      return { ...store, cartData: [...decrementQuantity(store.cartData, payload)] };
    case GET_TOTAL_ITEM_PRICE:
      return { ...store, totalPrice: calculatePrice(store.cartData) };
    default:
      return store;
  }
};

const deleteItem = (cart: CartStore, id: string) => {
  let rest_cart_data = cart.cartData.filter((e) => e.id !== id);
  console.log("cart after deleting data", cart.cartData);
  return rest_cart_data;
};

const addToCart = (cart: CartStore, item: CartItem) => {
  const temp = [...cart.cartData];
  let currentItem = { ...item, currentQuantity: 1 };
  console.log("current updated item", currentItem);
  temp.push(currentItem);
  return temp;
};

const incrementQuantity = (cart: CartItem[], id: string) => {
  return cart.map((e) => {
    if (e.id === id) {
      e.currentQuantity = e.currentQuantity ? e.currentQuantity + 1 : 1;
    }
    return e;
  });
};

const decrementQuantity = (cart: CartItem[], id: string) => {
  return cart.map((e) => {
    if (e.id === id && e.currentQuantity && e.currentQuantity > 1) {
      e.currentQuantity--;
    }
    return e;
  });
};

const calculatePrice = (cart: CartItem[]) => {
  return cart.reduce((acc, e) => (acc + e.price) * (e.currentQuantity || 1), 0);
};

