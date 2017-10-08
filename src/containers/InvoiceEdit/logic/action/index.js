
//Fetch INVOICE
export const FETCH_INVOICE = 'FETCH_INVOICE';
export const FETCH_INVOICE_SUCCESS = 'FETCH_INVOICE_SUCCESS';
export const FETCH_INVOICE_FAILURE = 'FETCH_INVOICE_FAILURE';
export const RESET_ACTIVE_INVOICE = 'RESET_ACTIVE_INVOICE';

export function fetchInvoice(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}`);

  return {
    type: FETCH_INVOICE,
    payload: request
  };
}


export function fetchInvoiceSuccess(activeInvoice) {
  return {
    type: FETCH_INVOICE_SUCCESS,
    payload: activeInvoice
  };
}

export function fetchInvoiceFailure(error) {
  return {
    type: FETCH_INVOICE_FAILURE,
    payload: error
  };
}

export function resetActiveInvoice() {
  return {
    type: RESET_ACTIVE_INVOICE
  }
}


