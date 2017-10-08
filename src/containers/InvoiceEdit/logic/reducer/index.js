import { combineReducers } from 'redux'
import fetchAllCusomersReducer from './fetchall'
import deleteInvoiceReducer from './delete'
import createInvoiceReducer from './create'
import changeInvoiceReducer from './change'


function getAll() {
  return combineReducers({
    all: fetchAllCusomersReducer,
    deleted: deleteInvoiceReducer,
    new: createInvoiceReducer,
    updated: changeInvoiceReducer
  })
}

export default getAll()
