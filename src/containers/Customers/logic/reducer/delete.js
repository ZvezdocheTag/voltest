import {
    DELETE_CUSTOMER,
    DELETE_CUSTOMER_SUCCESS,
    DELETE_CUSTOMER_FAILURE,
    RESET_DELETE_CUSTOMER,
} from '../action/delete'

const initialState = {
        customer:null, 
        error: null, 
        loading: false
}

function deleteCustomerReducer(state = initialState, action) {
    let error;
    switch(action.type) {
        
        case DELETE_CUSTOMER:
        console.log("DELTE")
            return { 
                ...state, 
                loading: true
            }
        case DELETE_CUSTOMER_SUCCESS:
        console.log("DELTE S")
            return { 
                customer: action.payload, 
                error:null, 
                loading: false 
            };
        case DELETE_CUSTOMER_FAILURE:
        console.log("DELTE E")
        error = action.payload || 
            {message: action.payload.message}
            return { 
                customer: null,  
                error: error, 
                loading: false 
            };
        case RESET_DELETE_CUSTOMER:
            return { 
                customer: null, 
                error:null, 
                loading: false 
            };
        default: 
            return state;
    }
} 

export default deleteCustomerReducer;