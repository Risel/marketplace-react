import {createSlice} from "@reduxjs/toolkit";
import {fetchProducts} from "./productsActions";

const initialState = {
  isLoading: false,
  products: {},
  error: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers:{},
  extraReducers: {
    [fetchProducts.pending]:(state) =>{
      state.isLoading = true;
      state.error = false;
    },
    [fetchProducts.fulfilled]:(state, {payload}) =>{
      state.isLoading = false;
      state.products = payload;
    },
    [fetchProducts.rejected]:(state, {payload}) =>{
      state.isLoading = false;
      state.error = payload;
    },

  },
})

export default productsSlice.reducer