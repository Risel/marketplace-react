import {createSlice} from "@reduxjs/toolkit";
import { loginUser, registerUser} from "./userActions";

const accessToken = localStorage.getItem('token')
  ? localStorage.getItem('token')
  : null

const userEmail = localStorage.getItem('email')
  ? localStorage.getItem('email')
  : null

const initialState = {
  isLoading: false,
  userInfo: null,
  userEmail,
  accessToken,
  error: '',
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      localStorage.removeItem('email')
      state.isLoading = false;
      state.userInfo = null;
      state.accessToken = null;
      state.error = null;
      state.userEmail = null
    }
  },
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null
    },
    [registerUser.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.success = true;
    },
    [registerUser.rejected]: (state, {payload}) => {
      state.loading = false;
      state.error = payload
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null
    },
    [loginUser.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.userEmail = payload.email;
      state.accessToken = payload.data.access_token
    },
    [loginUser.rejected]: (state, {payload}) => {
      state.loading = false;
      state.error = payload
    },
  },
})

export const {logout} = userSlice.actions
export default userSlice.reducer