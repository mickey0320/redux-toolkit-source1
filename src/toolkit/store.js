import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { isPlainObject, isFunction } from "./utils";

function configureStore(options) {
  const { middleware = [thunk], reducer, preloadedState } = options;
  let rootReducer;
  if (isFunction(reducer)) {
    rootReducer = reducer;
  } else if (isPlainObject(reducer)) {
    rootReducer = combineReducers(reducer);
  }

  const store = createStore(
    reducer,
    preloadedState,
    applyMiddleware(...middleware)
  );

  return store;
}

export default configureStore;
