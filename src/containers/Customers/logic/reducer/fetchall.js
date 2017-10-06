import {
    FETCH_CUSTOMERS,
    FETCH_CUSTOMERS_SUCCESS,
    FETCH_CUSTOMERS_FAILURE,
    RESET_FETCH_CUSTOMERS,
} from '../action/fetchall'

const initialState = {
        customers: [], 
        error:null, 
        loading: false
}

function fetchAllCusomersReducer(state = initialState, action) {
    let error;
    switch(action.type) {
        case FETCH_CUSTOMERS:
            console.log("FETCH")
            return { 
                ...state, 
                customers:[], 
                error: null, 
                loading: true
            }
        case FETCH_CUSTOMERS_SUCCESS:
        console.log("FETCH S")
        return { 
            ...state, 
            customers: action.payload, 
            error:null, 
            loading: false
             
        };
        case FETCH_CUSTOMERS_FAILURE:
        console.log("FETCH FF")
        error = action.payload || 
            {message: action.payload.message}
        return { 
            ...state, 
            customers: [], 
            error: error, 
            loading: false
             
        };
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