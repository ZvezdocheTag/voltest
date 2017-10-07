import ROOT_URL from '../../../../constants'
import axios from 'axios'
import { updateCusomerList } from './fetchall'

import { fetchCustomers } from './fetchall'
export const CREATE_CUSTOMER = 'CREATE_CUSTOMER';
export const CREATE_CUSTOMER_SUCCESS = 'CREATE_CUSTOMER_SUCCESS';
export const CREATE_CUSTOMER_FAILURE = 'CREATE_CUSTOMER_FAILURE';
export const RESET_NEW_CUSTOMER = 'RESET_NEW_CUSTOMER';

export function createCustomer(props) {
    const request = axios({
      method: 'post',
      data: props,
      url: `${ROOT_URL}/customers`,
    });
  
    return (dispatch) => dispatch({
      type: CREATE_CUSTOMER, 
      request
    })
    .request
    .then(
      res => {
        dispatch(createCustomerSuccess(res.data))
        dispatch(updateCusomerList(res.data, "POST"))
      },
      err => dispatch(createCustomerFailure(err)) 
    )
  }
  
  export function createCustomerSuccess(newCustomer) {
    return {
      type: CREATE_CUSTOMER_SUCCESS,
      payload: newCustomer
    };
  }
  
  export function createCustomerFailure(error) {
    return {
      type: CREATE_CUSTOMER_FAILURE,
      payload: error
    };
  }
  
  export function resetNewCustomer() {
    return {
      type: RESET_NEW_CUSTOMER
    }
  };

  