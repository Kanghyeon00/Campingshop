import { configureStore, createSlice } from "@reduxjs/toolkit";

let cart = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    increase(state, action) {
      let ic = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[ic].count++;
    },
    decrease(state, action) {
      let dc = state.findIndex((a) => {
        return a.id === action.payload;
      });
      state[dc].count--;
    },
    addItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { increase, decrease, addItem, deleteItem } = cart.actions;

export default configureStore({
  reducer: {
    cart: cart.reducer,
  },
});
