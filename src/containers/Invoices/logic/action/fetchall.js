
import ROOT_URL from '../../../../constants'
import axios from 'axios'
//Invoice list
export const FETCH_INVOICES = 'FETCH_INVOICES';
export const FETCH_INVOICES_SUCCESS = 'FETCH_INVOICES_SUCCESS';
export const FETCH_INVOICES_FAILURE = 'FETCH_INVOICES_FAILURE';
export const RESET_INVOICES = 'RESET_INVOICES';
export const UPDATE_INVOICE_LIST = 'UPDATE_INVOICE_LIST';

export function fetchInvoices() {
    const request = axios({
      method: 'get',
      url: `${ROOT_URL}/invoices`,
      headers: []
    });
    return (dispatch) => dispatch({
        type: FETCH_INVOICES, 
        request
      })
      .request
      .then(
        res => {
          console.log(res)
          Array.isArray(res.data) ? 
            dispatch(fetchInvoicesSuccess(res.data)) :
            dispatch(fetchInvoicesFailure("DATA IS NOT ARRAY")) 
        },
        err => dispatch(fetchInvoicesFailure(err)) 
      )
  }

export function updateInvoiceList(data, filter) {
  return {
    type: UPDATE_INVOICE_LIST,
    payload: data,
    filter
  }
}

function fetchInvoicesSuccess(posts) {
  return {
    type: FETCH_INVOICES_SUCCESS,
    payload: posts
  };
}
  
function fetchInvoicesFailure(error) {
  return {
    type: FETCH_INVOICES_FAILURE,
    payload: error
  };
}