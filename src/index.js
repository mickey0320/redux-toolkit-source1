import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "./toolkit";

// const add = createAction("ADD", (args) => {
//   return {
//     payload: args * 10,
//   };
// });

// const defaultState = {
//   count: 0,
// };
// const reducer = createReducer(defaultState, {
//   [add.type](state, action) {
//     state.count = action.payload + state.count;
//   },
// });

// const store = configureStore({
//   reducer,
// });

// store.dispatch(add(10));
const todoSlice = createSlice({
  name: "todo",
  initialState: { count: 0 },
  reducers: {
    add(state, action) {
      state.count += action.payload;
    },
  },
});

const store = configureStore({
  reducer: todoSlice.reducer,
});

store.dispatch(todoSlice.actions.add(10));

console.log(store.getState());
