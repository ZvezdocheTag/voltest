import { LOCATION_CHANGE } from 'react-router-redux';
import { combineReducers } from 'redux'
import customerReducer from './containers/Customers/logic/reducer/'
import productReducer from './containers/Products/logic/reducer/'
import { combineForms } from 'react-redux-form';
import {
  addCustomer,
  changeCustomer
} from './containers/Customers/logic/initialFormScheme'
import {
  addProduct,
  changeProduct
} from './containers/Products/logic/initialFormScheme'

const routeInitialState = {
  location: null,
};

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
      // console.log("LOCAL CHANGE")
      return {
        ...state,
        location: action.payload,
      }
    default:
      return state;
  }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
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
    routeReducer,
    customer: customerReducer,
    product: productReducer,
    ...injectedReducers
  });
}