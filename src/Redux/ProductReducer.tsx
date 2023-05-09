import { PRODUCT_ERROR, PRODUCT_FILTER, PRODUCT_LOADING, PRODUCT_SEARCH, PRODUCT_SUCCESS } from "./ProductConstant"

interface Product {
    color: string;
    gender: string;
    type: string;
    price: number;
}

interface ProductState {
    fetchedData: Product[];
    filterData: Product[];
    loading: boolean;
    error: boolean;
}

interface ProductAction {
    type: string;
    payload: any;
}

const initialData: ProductState = {
    fetchedData:[],
    filterData:[],
    loading:false,
    error:false
};

export const productReducer = (state: ProductState = initialData, action: ProductAction) => {
    switch(action.type){
        case PRODUCT_LOADING: return {...state, loading:true}
        case PRODUCT_ERROR: return {...state, loading:false, error:true}
        case PRODUCT_SUCCESS: return {...state , fetchedData:[...action.payload] ,filterData:[...action.payload] , error:false,loading:false}
        case PRODUCT_FILTER: return {...state, filterData:[...filterHandler(state.fetchedData, action.payload)]}
        case PRODUCT_SEARCH: return {...state , filterData:[...searchDataHandler(state.fetchedData, action.payload)]}
        default: return state
    }
}

const filterHandler = (data: Product[], selectedValues: string[]) => {
    let result = data.filter((e) => {
        if(selectedValues.includes(e.color)){
            return e
        }
        else if(selectedValues.includes(e.gender)){
            return e
        }
        else if(selectedValues.includes(e.type)){
            return e
        }
        else if(selectedValues.includes("250")){
            return e.price<=250
        }
        else if(selectedValues.includes("251")){
            return (e.price>=251 && e.price<=450)
        }
        else if(selectedValues.includes("450")){
            return  e.price>=450
        }
    })
    return result
}

const searchDataHandler = (data: Product[], inputValues: string[]) => {
    let search_result = data.filter((e) => {
        if((e.color===inputValues[0] && e.type===inputValues[1])){
            return e
        }
        if( e.color===inputValues[0] ){
            return e
        }
        if( e.type===inputValues[0]){
            return e
        }
    });
    return search_result.length ? search_result : data
}
