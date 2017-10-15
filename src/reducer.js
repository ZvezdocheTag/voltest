import { LOCATION_CHANGE } from 'react-router-redux';
import { combineReducers } from 'redux'
import customerReducer from './containers/Customers/logic/reducer/'
import productReducer from './containers/Products/logic/reducer/'
import invoiceReducer from './containers/Invoices/logic/reducer/'
import { combineForms } from 'react-redux-form';
import {
  addCustomer,
  changeCustomer
} from './containers/Customers/logic/initialFormScheme'
import {
  addProduct,
  changeProduct
} from './containers/Products/logic/initialFormScheme'
import {
  addInvoice,
  changeInvoice
} from './containers/InvoiceEdit/logic/initialFormScheme'

const routeInitialState = {
  location: null,
};

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    case LOCATION_CHANGE:
      return {
        ...state,
        location: action.payload,
      }
    default:
      return state;
  }
}

export default function createReducer(injectedReducers) {
  return combineForms({
    customerForm: {
      add: addCustomer,
      change: changeCustomer
    },
    productForm: {
      add: addProduct,
      change: changeProduct
    },
    invoiceForm: {
      add: addInvoice,
      change: changeInvoice
    },
    routeReducer,
    customer: customerReducer,
    product: productReducer,
    invoice: invoiceReducer,
    ...injectedReducers
  });
}