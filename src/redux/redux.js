import data from "../assets/data";
import { createSlice, configureStore } from "@reduxjs/toolkit";

// create a slice

// menuSlice 생성
export const menuSlice = createSlice({
  name: "menu",
  initialState: data.menu,
  reducers: {},
});

// cartSlice 생성
export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart(state, action) {
      return [...state, action.payload];
    },
    removeFromCart(state, action) {
      return state.filter((el) => action.payload !== el.id);
    },
  },
});

// configureStore 생성
export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
  },
});
