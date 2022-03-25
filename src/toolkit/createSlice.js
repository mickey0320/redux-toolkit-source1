import createAction from "./createAction";
import createReducer from "./createReducer";

function createSlice(options) {
  const { name, initialState, reducers } = options;
  let actions = {};
  const prefixReducers = {};
  let reducer;
  for (let key in reducers) {
    const type = getType(name, key);
    actions[key] = createAction(type);
    prefixReducers[type] = reducers[key];
  }
  reducer = createReducer(initialState, prefixReducers);

  return {
    actions,
    reducer,
  };
}

function getType(prefix, type) {
  return `${prefix}/${type}`;
}

export default createSlice;
