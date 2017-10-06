import ROOT_URL from '../../constants'
//CHANGE CUSTOMER
export const CHANGE_CUSTOMER = 'CHANGE_CUSTOMER';
export const CHANGE_CUSTOMER_SUCCESS = 'CHANGE_CUSTOMER_SUCCESS';
export const CHANGE_CUSTOMER_FAILURE = 'CHANGE_CUSTOMER_FAILURE';
export const RESET_CHANGED_CUSTOMER = 'RESET_CHANGED_CUSTOMER';

export function changeCustomer(props, tokenFromStorage) {
    const request = axios({
      method: 'post',
      data: props,
      url: `${ROOT_URL}/posts`,
      headers: {
        'Authorization': `Bearer ${tokenFromStorage}`
      }
    });
  
    return {
      type: CHANGE_CUSTOMER,
      payload: request
    };
  }
  
  export function changeCustomerSuccess(newCustomer) {
    return {
      type: CHANGE_CUSTOMER_SUCCESS,
      payload: newCustomer
    };
  }
  
  export function changeCustomerFailure(error) {
    return {
      type: CHANGE_CUSTOMER_FAILURE,
      payload: error
    };
  }
  
  export function resetNewCustomer() {
    return {
      type: RESET_NEW_CUSTOMER
    }
  };