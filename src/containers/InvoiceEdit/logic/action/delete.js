import ROOT_URL from '../../../../constants'
import axios from 'axios'
import { updateInvoiceList } from './fetchall'

//Delete INVOICE
export const DELETE_INVOICE = 'DELETE_INVOICE';
export const DELETE_INVOICE_SUCCESS = 'DELETE_INVOICE_SUCCESS';
export const DELETE_INVOICE_FAILURE = 'DELETE_INVOICE_FAILURE';
export const RESET_DELETED_INVOICE = 'RESET_DELETED_INVOICE';

export function deleteInvoice(id) {
    const request = axios({
      method: 'delete',
      url: `${ROOT_URL}/invoices/${id}`,
    });
    return (dispatch) =>  dispatch({
        type: DELETE_INVOICE,
        request
      })
      .request
      .then(
        res => {
          dispatch(deleteInvoiceSuccess(res.data))
          dispatch(dispatch(updateInvoiceList(res.data, "DELETE")))
        },
        err => dispatch(deleteInvoiceFailure(res.data))
      )
  }
  
function deleteInvoiceSuccess(deletedInvoice) {
  return {
    type: DELETE_INVOICE_SUCCESS,
    payload: deletedInvoice
  };
}
  
function deleteInvoiceFailure(response) {
  return {
    type: DELETE_INVOICE_FAILURE,
    payload: response
  };
}
  
  export function resetDeletedInvoice() {
    return {
      type: RESET_DELETED_INVOICE
    }
  }
  ;
  