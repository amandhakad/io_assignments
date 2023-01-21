import React from 'react';
import { store } from './redux/store'
import { Provider } from 'react-redux'

import Root from './components/Root';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Login';
import Register from './components/Register';
import MovieList from './components/MovieList';

import './assets/theme.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";


// adding Redux provider to root
const RootElement = (
  <Provider store={store}>
    <Root />
  </Provider>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: RootElement,
    children: [
      {
        path: "/",
        element: <ProtectedRoute/>,
        children: [
          {
            // default route
            path: "/",
            element: <MovieList/>
          }
        ]
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      }
    ]
  }
]);


function App() {
  return (
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
