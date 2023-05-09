import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { productReducer } from "./ProductReducer";
import { CartReducer } from "./CartReducer";

export interface RootState {
  productReducer: ReturnType<typeof productReducer>;
  CartReducer: ReturnType<typeof CartReducer>;
}

const rootReducer = combineReducers<RootState>({
  productReducer,
  CartReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunk as ThunkMiddleware<RootState>)
);

