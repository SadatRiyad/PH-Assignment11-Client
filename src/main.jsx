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
import MyQueries from './Components/MyQueries/MyQueries.jsx'
import AddQuery from './Components/AddQuery/AddQuery.jsx'
import ContactUs from './Components/ContactUs/ContactUs.jsx'
import QueryDetails from './Components/QueryDetails/QueryDetails.jsx'
import UpdateQuery from './Components/UpdateQuery/UpdateQuery.jsx'
import RecommendForMe from './Components/RecommendForMe/RecommendForMe.jsx'
import MyRecommendations from './Components/MyRecommendatios/MyRecommendations.jsx'
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
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/queries`),
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
        path: "/allQueries",
        element: <Queries></Queries>,
      },
      {
        path: "/recommendationsForMe",
        element: <PrivateRoute><RecommendForMe></RecommendForMe></PrivateRoute>,
      },
      {
        path: "/myQueries",
        element: <PrivateRoute><MyQueries></MyQueries></PrivateRoute>,
      },
      {
        path: "/myRecommendations",
        element: <PrivateRoute><MyRecommendations></MyRecommendations></PrivateRoute>
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/addQuery",
        element: <PrivateRoute><AddQuery></AddQuery></PrivateRoute>,
      },
      {
        path: "/updateQuery/id/:id",
        element: <PrivateRoute><UpdateQuery></UpdateQuery></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/queries/id/${params.id}`, { credentials: 'include' }),
      },
      {
        path: "/queryDetails/id/:id",
        element: <PrivateRoute><QueryDetails></QueryDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/queries/id/${params.id}`, { credentials: 'include' }),
      },
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