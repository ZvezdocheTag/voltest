import {
    DELETE_PRODUCT,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    RESET_DELETE_PRODUCT,
} from '../action/delete'

const initialState = {
    product:null, 
    error: null, 
    loading: false
}

function deleteProductReducer(state = initialState, action) {
    let error;
    switch(action.type) {   
        case DELETE_PRODUCT:
            return { 
                ...state, 
                loading: true
            }
        case DELETE_PRODUCT_SUCCESS:
            return { 
                product: action.payload, 
                error:null, 
                loading: false 
            };
        case DELETE_PRODUCT_FAILURE:
        error = action.payload || 
            {message: action.payload.message}
            return { 
                product: null,  
                error: error, 
                loading: false 
            };
        case RESET_DELETE_PRODUCT:
            return { 
                product: null, 
                error:null, 
                loading: false 
            };
        default: 
            return state;
    }
} 

export default deleteProductReducer;