import {
    CHANGE_CUSTOMER,
    CHANGE_CUSTOMER_SUCCESS,
    CHANGE_CUSTOMER_FAILURE,
    RESET_CHANGED_CUSTOMER,
} from '../action/change'

const initialState = {

}


function changeCustomer(state = initialState, action) {
    switch(action.type) {
        case CHANGE_CUSTOMER:
            return {
                ...state
            } 
        case CHANGE_CUSTOMER_SUCCESS:
            return {
                ...state
            } 
        case CHANGE_CUSTOMER_FAILURE:
            return {
                ...state
            } 
        case RESET_CHANGED_CUSTOMER:
            return {
                ...state
            } 
        default: 
            return state;
    }
} 

export default changeCustomer;