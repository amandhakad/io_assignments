import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { store } from './../store'

const backendURL = 'http://localhost:6001'

export const getMovies = createAsyncThunk(
  'movie/getMovies',
  async (payload, { rejectWithValue }) => {
    try {

      const config = {
        headers: {
          'Content-Type': 'application/json',
          'authorization': 'Bearer '+store.getState().auth.authToken
        },
      }

      const result = await axios.get(
        `${backendURL}/api/movies`,
        config
      );

      console.log("tr: s", result)

      if(!result.data.status) {
        return rejectWithValue(result.data.message);
      }

      return result.data.data;
    } catch (error) {
      return rejectWithValue((error.response && error.response.data && error.response.data.message ) ? error.response.data.message : error.message)
    }
  }
)