import ROOT_URL from '../../../../constants'
import axios from 'axios'
import { updateInvoiceList } from './fetchall'

import { fetchInvoices } from './fetchall'
export const CREATE_INVOICE = 'CREATE_INVOICE';
export const CREATE_INVOICE_SUCCESS = 'CREATE_INVOICE_SUCCESS';
export const CREATE_INVOICE_FAILURE = 'CREATE_INVOICE_FAILURE';
export const RESET_NEW_INVOICE = 'RESET_NEW_INVOICE';

export function createInvoice(props) {
    const request = axios({
      method: 'post',
      data: props,
      url: `${ROOT_URL}/invoices`,
    });
  
    return (dispatch) => dispatch({
      type: CREATE_INVOICE, 
      request
    })
    .request
    .then(
      res => {
        dispatch(createInvoiceSuccess(res.data))
        dispatch(updateInvoiceList(res.data, "POST"))
      },
      err => dispatch(createInvoiceFailure(err)) 
    )
  }
  
  export function createInvoiceSuccess(newInvoice) {
    return {
      type: CREATE_INVOICE_SUCCESS,
      payload: newInvoice
    };
  }
  
  export function createInvoiceFailure(error) {
    return {
      type: CREATE_INVOICE_FAILURE,
      payload: error
    };
  }
  
  export function resetNewInvoice() {
    return {
      type: RESET_NEW_INVOICE
    }
  };

  