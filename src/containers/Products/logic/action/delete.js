import ROOT_URL from '../../../../constants'
import axios from 'axios'
import { updateCusomerList } from './fetchall'

//Delete CUSTOMER
export const DELETE_CUSTOMER = 'DELETE_CUSTOMER';
export const DELETE_CUSTOMER_SUCCESS = 'DELETE_CUSTOMER_SUCCESS';
export const DELETE_CUSTOMER_FAILURE = 'DELETE_CUSTOMER_FAILURE';
export const RESET_DELETED_CUSTOMER = 'RESET_DELETED_CUSTOMER';

export function deleteCustomer(id) {
    const request = axios({
      method: 'delete',
      url: `${ROOT_URL}/customers/${id}`,
    });
    return (dispatch) =>  dispatch({
        type: DELETE_CUSTOMER,
        request
      })
      .request
      .then(
        res => {
          dispatch(deleteCustomerSuccess(res.data))
          dispatch(dispatch(updateCusomerList(res.data, "DELETE")))
        },
        err => dispatch(deleteCustomerFailure(res.data))
      )
  }
  
function deleteCustomerSuccess(deletedCustomer) {
  return {
    type: DELETE_CUSTOMER_SUCCESS,
    payload: deletedCustomer
  };
}
  
function deleteCustomerFailure(response) {
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
  