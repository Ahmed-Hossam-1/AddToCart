import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loadingProducts: false,
  products: [],
  errorProducts: "",
};

function getProducts() {
  return axios.get("https://fakestoreapi.com/products");
}

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const res = await getProducts();
    return res.data;
  }
);

const ProductSlice = createSlice({
  name: "productReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loadingProducts = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loadingProducts = false;
      state.products = action.payload;
      state.errorProducts = "";
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loadingProducts = false;
      state.products = [];
      state.errorProducts = action.error.message;
    });
  },
});

export default ProductSlice.reducer;
