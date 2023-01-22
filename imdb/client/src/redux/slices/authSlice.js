import { createSlice } from '@reduxjs/toolkit'
import { registerUser, loginUser } from './../actions/authActions'

// initizlizing authToken from local storage
const authToken = localStorage.getItem('authToken') && localStorage.getItem('authToken')!=='null'
  ? localStorage.getItem('authToken')
  : null;

const initialState = {
  loading: false,
  userInfo: {},
  authToken: authToken,
  error: null,
  success: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
    setError: (state, action) => {
      state.error = action.payload
    },
  },
  extraReducers: {
    // login reducers
    [loginUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // login successful
      state.userInfo = payload
      state.authToken = payload.authToken
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
    // registration reducers
    [registerUser.pending]: (state) => {
      state.loading = true
      state.error = null
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.loading = false
      state.success = true // register+login successful
      state.userInfo = payload // registration also logs in
      state.authToken = payload.authToken // registration also logs in
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.loading = false
      state.error = payload
    },
  },
})

export const { logout, setError } = authSlice.actions;
export default authSlice.reducer