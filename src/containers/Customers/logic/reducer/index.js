import { combineReducers } from 'redux'
import fetchAllCusomersReducer from './fetchall'
import deleteCustomerReducer from './delete'
import createCustomerReducer from './create'


function getAll() {
  console.log(createCustomerReducer, "IN GET ALL")
  return combineReducers({
    all: fetchAllCusomersReducer,
    deleted: deleteCustomerReducer,
    new: createCustomerReducer
  })
}
export default getAll()
