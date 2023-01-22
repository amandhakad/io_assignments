import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'

import { moviesApi } from './../api/moviesApi'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [moviesApi.reducerPath]: moviesApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
})