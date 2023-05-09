import axios, { AxiosResponse } from "axios";
import { Dispatch } from "redux";

// action constants
export const PRODUCT_LOADING = "PRODUCT_LOADING";
export const PRODUCT_ERROR = "PRODUCT_ERROR";
export const PRODUCT_SUCCESS = "PRODUCT_SUCCESS";
export const PRODUCT_FILTER = "PRODUCT_FILTER";
export const PRODUCT_SEARCH = "PRODUCT_SEARCH";

// action creators
export const product_loading = () => ({ type: PRODUCT_LOADING });
export const product_success = (payload: any) => ({ type: PRODUCT_SUCCESS, payload });
export const product_error = () => ({ type: PRODUCT_ERROR });
export const product_filter = (payload: any) => ({ type: PRODUCT_FILTER, payload });
export const product_search = (payload: any) => ({ type: PRODUCT_SEARCH, payload });

export const get_product_request = () => (dispatch: Dispatch) => {
dispatch(product_loading());
setTimeout(() => {
axios
.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
.then((res: AxiosResponse) => {
dispatch(product_success(res.data));
})
.catch((err: Error) => {
dispatch(product_error());
});
}, 3000);
};




