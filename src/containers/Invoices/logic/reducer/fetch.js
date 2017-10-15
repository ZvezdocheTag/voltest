import {
    FETCH_INVOICE,
    FETCH_INVOICE_SUCCESS,
    FETCH_INVOICE_FAILURE,
    RESET_FETCH_INVOICE,
    UPDATE_INVOICE_LIST
} from '../action/fetch'

const initialState = {
    invoice: [], 
    error:null, 
    loading: false
}

function updateInvoiceListFilter(filter, action, state) {
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

function fetchIvoice(state = initialState, action) {
    let error;
    switch(action.type) {
        case FETCH_INVOICE:
            return { 
                ...state, 
                invoice:[], 
                error: null, 
                loading: true
            }
        case FETCH_INVOICE_SUCCESS:
            return { 
                ...state, 
                invoice: action.payload, 
                error:null, 
                loading: false    
            };
        case FETCH_INVOICE_FAILURE:
        error = action.payload || 
            {message: action.payload.message}
            return { 
                ...state, 
                invoice: [], 
                error: error, 
                loading: false
                
            };
        case UPDATE_INVOICE_LIST:
            return {
                ...state,
                invoice: updateInvoiceListFilter(
                    action.filter,
                    action.payload,
                    state.invoice
                )
            }
        case RESET_FETCH_INVOICE:
            return { 
                invoice: [], 
                error:null, 
                loading: false 
            };
        default: 
            return state;
    }
} 

export default fetchIvoice;