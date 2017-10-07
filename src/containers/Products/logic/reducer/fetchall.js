import {
    FETCH_PRODUCTS,
    FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE,
    RESET_FETCH_PRODUCTS,
    UPDATE_PRODUCT_LIST
} from '../action/fetchall'

const initialState = {
    products: [], 
    error:null, 
    loading: false
}

function updateProductListFilter(filter, action, state) {
    switch(filter) {
        case "POST":
            return [...state, action]
        case "PUT":
            return state.map(
                item => 
                    item.id === action.id ?
                    action :
                    item
                )
        case "DELETE":
            return state.filter(item => item.id !== action.id)
        default:
            return state;
    }
}

function fetchAllCusomersReducer(state = initialState, action) {
    let error;
    switch(action.type) {
        case FETCH_PRODUCTS:
            return { 
                ...state, 
                products:[], 
                error: null, 
                loading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
        return { 
            ...state, 
            products: action.payload, 
            error:null, 
            loading: false
             
        };
        case FETCH_PRODUCTS_FAILURE:
        error = action.payload || 
            {message: action.payload.message}
        return { 
            ...state, 
            products: [], 
            error: error, 
            loading: false
             
        };
        case UPDATE_PRODUCT_LIST:
            return {
                ...state,
                products: updateProductListFilter(
                    action.filter,
                    action.payload,
                    state.products
                )
            }
        case RESET_FETCH_PRODUCTS:
            return { 
                ...state,
                products: [], 
                error:null, 
                loading: false 
            };
        default: 
            return state;
    }
} 

export default fetchAllCusomersReducer;