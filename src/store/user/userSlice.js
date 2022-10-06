import {createSlice} from "@reduxjs/toolkit";
import {loginUser, registerUser} from "./userActions";

const accessToken = localStorage.getItem('access_token')
  ? localStorage.getItem('access_token')
  : null

const initialState = {
  isLoading: false,
  userInfo: null,
  accessToken,
  error: null,
  success: false,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.loading = true;
      state.error = null
    },
    [registerUser.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.success = true;
    },
    [registerUser.pending]: (state, {payload}) => {
      state.loading = false;
      state.error = payload
    },
    [loginUser.pending]: (state) => {
      state.loading = true;
      state.error = null
    },
    [loginUser.fulfilled]: (state, {payload}) => {
      state.loading = false;
      state.userInfo = payload;
      state.accessToken = payload.access_token
    },
    [loginUser.pending]: (state, {payload}) => {
      state.loading = false;
      state.error = payload
    },
  },
})

export default userSlice.reducer