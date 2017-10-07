import {
    CHANGE_PRODUCT,
    CHANGE_PRODUCT_SUCCESS,
    CHANGE_PRODUCT_FAILURE,
    RESET_CHANGED_PRODUCT,
} from '../action/change'

const initialState = {
    customer:null, 
    error: null, 
    loading: false 
}


function changeProductReducer (state = initialState, action) {
    let error;
    switch(action.type) {
        case CHANGE_PRODUCT:
            console.log("CHANGE")
            return { 
                ...state, 
                loading: true    
            } 
        case CHANGE_PRODUCT_SUCCESS:
        console.log("CHANGE S")
            return { 
                customer: action.payload, 
                error: false,
                loading: false    
            }
        case CHANGE_PRODUCT_FAILURE:
        console.log("CHANGE F")
            error = action.payload || 
            {message: action.payload.message}
            return {  
                customer: null, 
                error: error, 
                loading: false    
            };
        case RESET_CHANGED_PRODUCT:
            return {  
                customer: null, 
                error:null, 
                loading: false
            };
        default: 
            return state;
    }
} 

export default changeProductReducer ;