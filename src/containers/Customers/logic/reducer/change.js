import {
    CHANGE_CUSTOMER,
    CHANGE_CUSTOMER_SUCCESS,
    CHANGE_CUSTOMER_FAILURE,
    RESET_CHANGED_CUSTOMER,
} from '../action/change'

const initialState = {
    customer:null, 
    error: null, 
    loading: false 
}


function changeCustomerReducer (state = initialState, action) {
    let error;
    switch(action.type) {
        case CHANGE_CUSTOMER:
            console.log("CHANGE")
            return { 
                ...state, 
                loading: true    
            } 
        case CHANGE_CUSTOMER_SUCCESS:
        console.log("CHANGE S")
            return { 
                customer: action.payload, 
                error: false,
                loading: false    
            }
        case CHANGE_CUSTOMER_FAILURE:
        console.log("CHANGE F")
            error = action.payload || 
            {message: action.payload.message}
            return {  
                customer: null, 
                error: error, 
                loading: false    
            };
        case RESET_CHANGED_CUSTOMER:
            return {  
                customer: null, 
                error:null, 
                loading: false
            };
        default: 
            return state;
    }
} 

export default changeCustomerReducer ;