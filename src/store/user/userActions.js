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
        console.log(error)
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
      localStorage.setItem('email', email)
      return {
        data,
        email,
      };
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)