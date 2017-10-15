import {
    FETCH_INVOICES,
    FETCH_INVOICES_SUCCESS,
    FETCH_INVOICES_FAILURE,
    RESET_FETCH_INVOICES,
    UPDATE_INVOICE_LIST
} from '../action/fetchall'

const initialState = {
    invoices: [], 
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

function fetchAllIvoicesReducer(state = initialState, action) {
    let error;
    switch(action.type) {
        case FETCH_INVOICES:
            return { 
                ...state, 
                invoices:[], 
                error: null, 
                loading: true
            }
        case FETCH_INVOICES_SUCCESS:
            return { 
                ...state, 
                invoices: action.payload, 
                error:null, 
                loading: false
                
            };
        case FETCH_INVOICES_FAILURE:
        error = action.payload || 
            {message: action.payload.message}
            return { 
                ...state, 
                invoices: [], 
                error: error, 
                loading: false
                
            };
        case UPDATE_INVOICE_LIST:
            return {
                ...state,
                invoices: updateInvoiceListFilter(
                    action.filter,
                    action.payload,
                    state.invoices
                )
            }
        case RESET_FETCH_INVOICES:
            return { 
                ...state,
                invoices: [], 
                error:null, 
                loading: false 
            };
        default: 
            return state;
    }
} 

export default fetchAllIvoicesReducer;