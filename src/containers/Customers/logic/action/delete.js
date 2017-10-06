//Delete CUSTOMER
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const DELETE_CUSTOMER_SUCCESS = 'DELETE_CUSTOMER_SUCCESS';
export const DELETE_CUSTOMER_FAILURE = 'DELETE_CUSTOMER_FAILURE';
export const RESET_DELETED_CUSTOMER = 'RESET_DELETED_CUSTOMER';

export function deleteCustomer(id, tokenFromStorage) {
    const request = axios({
      method: 'delete',
      url: `${ROOT_URL}/posts/${id}`,
      headers: {
        'Authorization': `Bearer ${tokenFromStorage}`
      }
    });
    return {
      type: DELETE_CUSTOMER,
      payload: request
    };
  }
  
  export function deleteCustomerSuccess(deletedCustomer) {
    return {
      type: DELETE_CUSTOMER_SUCCESS,
      payload: deletedCustomer
    };
  }
  
  export function deleteCustomerFailure(response) {
    return {
      type: DELETE_CUSTOMER_FAILURE,
      payload: response
    };
  }
  
  export function resetDeletedCustomer() {
    return {
      type: RESET_DELETED_CUSTOMER
    }
  }
  ;
  