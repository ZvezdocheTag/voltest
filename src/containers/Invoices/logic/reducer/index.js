import { combineReducers } from 'redux'
import fetchAllIvoicesReducer from './fetchall'
import fetchIvoice from './fetch'
import deleteInvoiceReducer from './delete'
import createInvoiceReducer from './create'
import changeInvoiceReducer from './change'


function getAll() {
  return combineReducers({
    all: fetchAllIvoicesReducer,
    deleted: deleteInvoiceReducer,
    new: createInvoiceReducer,
    updated: changeInvoiceReducer,
    single: fetchIvoice
  })
}

export default getAll()
