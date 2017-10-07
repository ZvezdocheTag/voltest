import {
    CREATE_CUSTOMER,
    CREATE_CUSTOMER_SUCCESS,
    CREATE_CUSTOMER_FAILURE,
    RESET_CREATE_CUSTOMER,
} from '../action/create'

const initialState = {  
    customer:null, 
    error: null, 
    loading: false 
}

function createCustomerReducer(state = initialState, action) {
    let error;
    switch(action.type) {
        case CREATE_CUSTOMER:
            return { 
                ...state, 
                loading: true    
            }
        case CREATE_CUSTOMER_SUCCESS:
            return {  
                customer: action.payload, 
                error:null, 
                loading: false    
            };
        case CREATE_CUSTOMER_FAILURE:
        error = action.payload || 
            {message: action.payload.message}
            return {  
                customer: null, 
                error: error, 
                loading: false    
            };
        case RESET_CREATE_CUSTOMER:
            return {  
                customer: null, 
                error:null, 
                loading: false
            };
        default: 
            return state;
    }
} 

export default createCustomerReducer;