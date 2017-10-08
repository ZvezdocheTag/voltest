import ROOT_URL from '../../../../constants'
import axios from 'axios'
import { updateInvoiceList } from './fetchall'
//CHANGE INVOICE
export const CHANGE_INVOICE = 'CHANGE_INVOICE';
export const CHANGE_INVOICE_SUCCESS = 'CHANGE_INVOICE_SUCCESS';
export const CHANGE_INVOICE_FAILURE = 'CHANGE_INVOICE_FAILURE';
export const RESET_CHANGED_INVOICE = 'RESET_CHANGED_INVOICE';

export function changeInvoice(props, id) {
    const request = axios({
      method: 'put',
      data: props,
      url: `${ROOT_URL}/invoices/${id}`,
    });
  
    return (dispatch) => dispatch({
      type: CHANGE_INVOICE, 
      request
    })
    .request
    .then(
      res => {
        dispatch(changeInvoiceSuccess(res.data))
        dispatch(updateInvoiceList(res.data, "PUT"))
      },
      err => dispatch(changeInvoiceFailure(err)) 
    )
  }


  
function changeInvoiceSuccess(newInvoice) {
  return {
    type: CHANGE_INVOICE_SUCCESS,
    payload: newInvoice
  };
}
  
function changeInvoiceFailure(error) {
  return {
    type: CHANGE_INVOICE_FAILURE,
    payload: error
  };
}
  
  export function resetNewInvoice() {
    return {
      type: RESET_NEW_INVOICE
    }
  };