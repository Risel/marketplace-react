import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios'

export const registerUser = createAsyncThunk(
  'user/register',
  async (
    {email, password},
    {rejectWithValue}) => {
    try {
      await axios.post('http://localhost:8000/auth/register', {email, password})
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const loginUser = createAsyncThunk(
  'user/login',
  async ({email, password}, {rejectWithValue}) => {
    try {
      const {data} = await axios.post('http://localhost:8000/auth/login', {email, password})
      localStorage.setItem('token', data.access_token)
      return {
        data,
        email,
        password
      };
    } catch (error) {
      console.log(error)
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)

export const getUserDetails = createAsyncThunk(
  'user/getUserDetails',
  async (arg, { getState, rejectWithValue }) => {
    try {
      const { user } = getState()

      const config = {
        headers: {
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
      const { data } = await axios.get(`/api/user/profile`, config)
      return data
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)