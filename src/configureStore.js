import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createReducer from './reducer';
import thunk from 'redux-thunk';

export default function configureStore(initialState = {}, history) {
    // Create the store with two middlewares
    // 2. routerMiddleware: Syncs the location/URL path to the state
    const middlewares = [
      thunk,
      routerMiddleware(history),
    ];
  
    const enhancers = [
      applyMiddleware(...middlewares),
    ];
  
    const composeEnhancers =
      process.env.NODE_ENV !== 'production' &&
      typeof window === 'object' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
          // TODO Try to remove when `react-router-redux` is out of beta, LOCATION_CHANGE should not be fired more than once after hot reloading
          // Prevent recomputing reducers for `replaceReducer`
          shouldHotReload: false,
        })
        : compose;

  
    const store = createStore(
      createReducer(),
      initialState,
      composeEnhancers(...enhancers)
    );
  
    // Extensions
    store.injectedReducers = {}; // Reducer registry

    return store;
  }