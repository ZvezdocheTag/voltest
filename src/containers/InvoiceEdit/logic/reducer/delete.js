import {
    DELETE_INVOICE,
    DELETE_INVOICE_SUCCESS,
    DELETE_INVOICE_FAILURE,
    RESET_DELETE_INVOICE,
} from '../action/delete'

const initialState = {
    invoice:null, 
    error: null, 
    loading: false
}

function deleteInvoiceReducer(state = initialState, action) {
    let error;
    switch(action.type) {   
        case DELETE_INVOICE:
            return { 
                ...state, 
                loading: true
            }
        case DELETE_INVOICE_SUCCESS:
            return { 
                invoice: action.payload, 
                error:null, 
                loading: false 
            };
        case DELETE_INVOICE_FAILURE:
        error = action.payload || 
            {message: action.payload.message}
            return { 
                invoice: null,  
                error: error, 
                loading: false 
            };
        case RESET_DELETE_INVOICE:
            return { 
                invoice: null, 
                error:null, 
                loading: false 
            };
        default: 
            return state;
    }
} 

export default deleteInvoiceReducer;