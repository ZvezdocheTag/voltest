
import ROOT_URL from '../../../../constants'
import axios from 'axios'
//Invoice list
export const FETCH_INVOICE = 'FETCH_INVOICE';
export const FETCH_INVOICE_SUCCESS = 'FETCH_INVOICE_SUCCESS';
export const FETCH_INVOICE_FAILURE = 'FETCH_INVOICE_FAILURE';
export const RESET_FETCH_INVOICE = 'RESET_FETCH_INVOICE';
export const UPDATE_INVOICE_LIST = 'UPDATE_INVOICE_LIST';

export function fetchInvoice(id) {
    const request = axios({
      method: 'get',
      url: `${ROOT_URL}/invoices/${id}`,
      headers: []
    });
    return (dispatch) => dispatch({
        type: FETCH_INVOICE, 
        request
      })
      .request
      .then(
        res => dispatch(fetchInvoiceSuccess(res.data)),
        err => dispatch(fetchInvoiceFailure(err)) 
      )
  }

export function updateInvoiceList(data, filter) {
  return {
    type: UPDATE_INVOICE_LIST,
    payload: data,
    filter
  }
}

function fetchInvoiceSuccess(posts) {
  return {
    type: FETCH_INVOICE_SUCCESS,
    payload: posts
  };
}
  
function fetchInvoiceFailure(error) {
  return {
    type: FETCH_INVOICE_FAILURE,
    payload: error
  };
}

export function resetFetchInvoice() {
  return {
    type: RESET_FETCH_INVOICE
  };
}

