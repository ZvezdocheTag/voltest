
import ROOT_URL from '../../../../constants'
import axios from 'axios'
//Customer list
export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';
export const FETCH_CUSTOMERS_SUCCESS = 'FETCH_CUSTOMERS_SUCCESS';
export const FETCH_CUSTOMERS_FAILURE = 'FETCH_CUSTOMERS_FAILURE';
export const RESET_CUSTOMERS = 'RESET_CUSTOMERS';
export const UPDATE_CUSTOMER_LIST = 'UPDATE_CUSTOMER_LIST';

export function fetchCustomers() {
    const request = axios({
      method: 'get',
      url: `${ROOT_URL}/customers`,
      headers: []
    });
    return (dispatch) => dispatch({
        type: FETCH_CUSTOMERS, 
        request
      })
      .request
      .then(
        res => {
          Array.isArray(res.data) ? 
            dispatch(fetchCustomersSuccess(res.data)) :
            dispatch(fetchCustomersFailure("DATA IS NOT ARRAY")) 
        },
        err => dispatch(fetchCustomersFailure(err)) 
      )
  }

export function updateCusomerList(data, filter) {
  return {
    type: UPDATE_CUSTOMER_LIST,
    payload: data,
    filter
  }
}

function fetchCustomersSuccess(posts) {
  return {
    type: FETCH_CUSTOMERS_SUCCESS,
    payload: posts
  };
}
  
function fetchCustomersFailure(error) {
  return {
    type: FETCH_CUSTOMERS_FAILURE,
    payload: error
  };
}