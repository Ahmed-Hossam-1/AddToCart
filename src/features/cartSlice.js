import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      findProduct == null
        ? state.push({ ...action.payload, quantity: 1 })
        : null;
    },
    removeItem: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clearCart: () => {
      return [];
    },
    decressItem: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct.quantity === 1) {
        return state.filter((product) => product.id !== action.payload.id);
      }
      if (findProduct) {
        findProduct.quantity -= 1;
      }
    },
    incressItem: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      }
    },
  },
});

export const { addToCart, removeItem, clearCart, decressItem, incressItem } =
  cartSlice.actions;
export default cartSlice.reducer;
