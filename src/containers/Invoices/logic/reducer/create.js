import {
    CREATE_INVOICE,
    CREATE_INVOICE_SUCCESS,
    CREATE_INVOICE_FAILURE,
    RESET_CREATE_INVOICE,
} from '../action/create'

const initialState = {  
    invoice:null, 
    error: null, 
    loading: false 
}

function createInvoiceReducer(state = initialState, action) {
    let error;
    switch(action.type) {
        case CREATE_INVOICE:
            return { 
                ...state, 
                loading: true    
            }
        case CREATE_INVOICE_SUCCESS:
            return {  
                invoice: action.payload, 
                error:null, 
                loading: false    
            };
        case CREATE_INVOICE_FAILURE:
        error = action.payload || 
            {message: action.payload.message}
            return {  
                invoice: null, 
                error: error, 
                loading: false    
            };
        case RESET_CREATE_INVOICE:
            return {  
                invoice: null, 
                error:null, 
                loading: false
            };
        default: 
            return state;
    }
} 

export default createInvoiceReducer;