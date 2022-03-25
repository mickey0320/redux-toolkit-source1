import { produce } from "immer";

function createReducer(initialState, reducers) {
  function reducer(state = initialState, action) {
    if (reducers[action.type]) {
      return produce(state, (draft) => {
        reducers[action.type](draft, action);
      });
    }
  }

  return reducer;
}

export default createReducer;
