import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { HelmetProvider } from 'react-helmet-async'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Components/Root/Root.jsx'
import Home from './Components/Home/Home.jsx'
import AuthProvider from './Components/ContextAPI/AuthProvider/AuthProvider.jsx'
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx'
import Login from './Components/Login/Login.jsx'
import Register from './Components/Register/Register.jsx'
import Queries from './Components/Queries/Queries.jsx'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx'

// AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/queries",
        element: <Queries></Queries>,
      },
      {
        path: "/recommendationsForMe",
        element: <div>Recommendations For Me</div>,
      },
      {
        path: "/myQueries",
        element: <PrivateRoute><div>My Queries</div></PrivateRoute>,
      },
      {
        path: "/myRecommendations",
        element: <div>My Recommendations</div>,
      },
      {
        path: "/contactUs",
        element: <div>Contact Us</div>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>,
)