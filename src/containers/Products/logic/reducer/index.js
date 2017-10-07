import { combineReducers } from 'redux'
import fetchAllCusomersReducer from './fetchall'
import deleteProductReducer from './delete'
import createProductReducer from './create'
import changeProductReducer from './change'


function getAll() {
  return combineReducers({
    all: fetchAllCusomersReducer,
    deleted: deleteProductReducer,
    new: createProductReducer,
    updated: changeProductReducer
  })
}

export default getAll()
