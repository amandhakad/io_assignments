import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

const backendURL = 'http://localhost:6001'

// default headers
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ name, email, username, password }, { rejectWithValue }) => {
    try {

      const result = await axios.post(
        `${backendURL}/api/auth/register`,
        { name, email, username, password },
        config
      );

      if(!result.data.status) {
        return rejectWithValue(result.data.message);
      }

      // save the token to localStorage
      localStorage.setItem('authToken', result.data.data.authToken)
      return result.data.data;
    } catch (error) {
      return rejectWithValue((error.response && error.response.data && error.response.data.message ) ? error.response.data.message : error.message)
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      console.log("r name, username, password", username, password);
      const result = await axios.post(
        `${backendURL}/api/auth/login`,
        { username, password },
        config
      );

      if(!result.data.status) {
        return rejectWithValue(result.data.message);
      }

      // save the token to localStorage
      localStorage.setItem('authToken', result.data.data.authToken)
      return result.data.data;
    } catch (error) {
      return rejectWithValue((error.response && error.response.data && error.response.data.message ) ? error.response.data.message : error.message)
    }
  }
)