// app/services/auth/authService.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import { store } from './../redux/store'

const backendURL = 'http://localhost:6001/'

const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axios({ url: baseUrl + url, method, data, params, headers })
      return { data: result.data.data }
    } catch (axiosError) {
      let err = axiosError

      if(err.response.status===401) {
        localStorage.setItem('authToken', null);
        // console.log("localStorage.setIten'", localStorage.getItem('authToken'))
        window.location.replace('/login');
      }

      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: axiosBaseQuery({
    // base url of backend API
    baseUrl: backendURL
  }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => ({
        url: 'api/movies',
        method: 'GET',
        headers: { 'Authorization': `Bearer ${store.getState().auth.authToken}` }
      }),
    }),
  }),
})

// export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMoviesQuery } = moviesApi