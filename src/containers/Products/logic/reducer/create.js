import {
    CREATE_PRODUCT,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAILURE,
    RESET_CREATE_PRODUCT,
} from '../action/create'

const initialState = {  
    product:null, 
    error: null, 
    loading: false 
}

function createProductReducer(state = initialState, action) {
    let error;
    switch(action.type) {
        case CREATE_PRODUCT:
            return { 
                ...state, 
                loading: true    
            }
        case CREATE_PRODUCT_SUCCESS:
            return {  
                product: action.payload, 
                error:null, 
                loading: false    
            };
        case CREATE_PRODUCT_FAILURE:
        error = action.payload || 
            {message: action.payload.message}
            return {  
                product: null, 
                error: error, 
                loading: false    
            };
        case RESET_CREATE_PRODUCT:
            return {  
                product: null, 
                error:null, 
                loading: false
            };
        default: 
            return state;
    }
} 

export default createProductReducer;