import { LOCATION_CHANGE } from 'react-router-redux';
import { combineReducers } from 'redux'
import globalReducer from './reducers';


const routeInitialState = {
  location: null,
};

function routeReducer(state = routeInitialState, action) {
  switch (action.type) {
    /* istanbul ignore next */
    case LOCATION_CHANGE:
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
  return combineReducers({
    globalReducer,
    routeReducer,
    ...injectedReducers
  });
}