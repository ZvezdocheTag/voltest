import {
    CHANGE_INVOICE,
    CHANGE_INVOICE_SUCCESS,
    CHANGE_INVOICE_FAILURE,
    RESET_CHANGED_INVOICE,
} from '../action/change'

const initialState = {
    invoice:null, 
    error: null, 
    loading: false 
}


function changeInvoiceReducer (state = initialState, action) {
    let error;
    switch(action.type) {
        case CHANGE_INVOICE:
            console.log("CHANGE cR")
            return { 
                ...state, 
                loading: true    
            } 
        case CHANGE_INVOICE_SUCCESS:
        console.log("CHANGE cS")
            return { 
                invoice: action.payload, 
                error: false,
                loading: false    
            }
        case CHANGE_INVOICE_FAILURE:
        console.log("CHANGE cF")
            error = action.payload || 
            {message: action.payload.message}
            return {  
                invoice: null, 
                error: error, 
                loading: false    
            };
        case RESET_CHANGED_INVOICE:
            return {  
                invoice: null, 
                error:null, 
                loading: false
            };
        default: 
            return state;
    }
} 

export default changeInvoiceReducer ;