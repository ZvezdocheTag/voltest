import { combineReducers } from 'redux'
import fetchAllCusomersReducer from './fetchall'
import deleteCustomerReducer from './delete'
import createCustomerReducer from './create'

export default combineReducers({
  all: fetchAllCusomersReducer,
  deleted: deleteCustomerReducer,
  new: createCustomerReducer
})
