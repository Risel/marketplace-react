import {configureStore} from "@reduxjs/toolkit";
import userReducer from './user/userSlice'
import productsReducer from './products/productsSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
  }
})
