import ROOT_URL from '../../../../constants'
import axios from 'axios'
import { updateCusomerList } from './fetchall'
//CHANGE CUSTOMER
export const CHANGE_CUSTOMER = 'CHANGE_CUSTOMER';
export const CHANGE_CUSTOMER_SUCCESS = 'CHANGE_CUSTOMER_SUCCESS';
export const CHANGE_CUSTOMER_FAILURE = 'CHANGE_CUSTOMER_FAILURE';
export const RESET_CHANGED_CUSTOMER = 'RESET_CHANGED_CUSTOMER';

export function changeCustomer(props, id) {
    const request = axios({
      method: 'put',
      data: props,
      url: `${ROOT_URL}/customers/${id}`,
    });
  
    return (dispatch) => dispatch({
      type: CHANGE_CUSTOMER, 
      request
    })
    .request
    .then(
      res => {
        dispatch(changeCustomerSuccess(res.data))
        dispatch(updateCusomerList(res.data, "PUT"))
      },
      err => dispatch(changeCustomerFailure(err)) 
    )
  }


  
function changeCustomerSuccess(newCustomer) {
  return {
    type: CHANGE_CUSTOMER_SUCCESS,
    payload: newCustomer
  };
}
  
function changeCustomerFailure(error) {
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