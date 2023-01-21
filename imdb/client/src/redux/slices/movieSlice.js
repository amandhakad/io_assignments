import { createSlice } from '@reduxjs/toolkit'
import { getMovies } from './../actions/movieActions';

const initialState = {
  loading: false,
  movies: [],
  error: null,
  success: false
}

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    setError: (state, action) => {
      state.error = action.payload
    },
  },
  extraReducers: {
    [getMovies.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [getMovies.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.movies = payload
      state.success = true
    },
    [getMovies.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
      state.success = false
    },
  },
})

export const { setError } = movieSlice.actions;
export default movieSlice.reducer