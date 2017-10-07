import {
    FETCH_CUSTOMERS,
    FETCH_CUSTOMERS_SUCCESS,
    FETCH_CUSTOMERS_FAILURE,
    RESET_FETCH_CUSTOMERS,
    UPDATE_CUSTOMER_LIST
} from '../action/fetchall'

const initialState = {
    customers: [], 
    error:null, 
    loading: false
}

function updateCustomerListFilter(filter, action, state) {
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
        case FETCH_CUSTOMERS:
            return { 
                ...state, 
                customers:[], 
                error: null, 
                loading: true
            }
        case FETCH_CUSTOMERS_SUCCESS:
        return { 
            ...state, 
            customers: action.payload, 
            error:null, 
            loading: false
             
        };
        case FETCH_CUSTOMERS_FAILURE:
        error = action.payload || 
            {message: action.payload.message}
        return { 
            ...state, 
            customers: [], 
            error: error, 
            loading: false
             
        };
        case UPDATE_CUSTOMER_LIST:
            return {
                ...state,
                customers: updateCustomerListFilter(
                    action.filter,
                    action.payload,
                    state.customers
                )
            }
        case RESET_FETCH_CUSTOMERS:
            return { 
                ...state,
                customers: [], 
                error:null, 
                loading: false 
            };
        default: 
            return state;
    }
} 

export default fetchAllCusomersReducer;