import { combineReducers } from 'redux'
import fetchAllCusomersReducer from './fetchall'
import deleteCustomerReducer from './delete'
import createCustomerReducer from './create'
import changeCustomerReducer from './change'


function getAll() {
  return combineReducers({
    all: fetchAllCusomersReducer,
    deleted: deleteCustomerReducer,
    new: createCustomerReducer,
    updated: changeCustomerReducer
  })
}

export default getAll()
