import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../features/productSlice";
import cartSlice from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartSlice,
  },
});
