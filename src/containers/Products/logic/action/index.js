
//Fetch CUSTOMER
export const FETCH_CUSTOMER = 'FETCH_CUSTOMER';
export const FETCH_CUSTOMER_SUCCESS = 'FETCH_CUSTOMER_SUCCESS';
export const FETCH_CUSTOMER_FAILURE = 'FETCH_CUSTOMER_FAILURE';
export const RESET_ACTIVE_CUSTOMER = 'RESET_ACTIVE_CUSTOMER';

export function fetchCustomer(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: FETCH_CUSTOMER,
    payload: request
  };
}


export function fetchCustomerSuccess(activeCustomer) {
  return {
    type: FETCH_CUSTOMER_SUCCESS,
    payload: activeCustomer
  };
}

export function fetchCustomerFailure(error) {
  return {
    type: FETCH_CUSTOMER_FAILURE,
    payload: error
  };
}

export function resetActiveCustomer() {
  return {
    type: RESET_ACTIVE_CUSTOMER
  }
}


