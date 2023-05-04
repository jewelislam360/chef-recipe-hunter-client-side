import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layout/Main.jsx';
import Blog from './Components/Blog/Blog.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Navigation from './layout/Navigation.jsx';
import Register from './Components/Register/register.jsx';
import Registerlayout from './layout/Registerlayout.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import RecipesDetails from './Components/RecipesDetails/RecipesDetails.jsx';
import PrivetRout from './Raout/PrivetRout.jsx';
import RecipeDataLoader from './Components/RecipesDetails/RecipeDataLoader.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/blog",
        element: <Blog></Blog>
      },


    ]
  },
  {
    path: "/login",
    element: <Navigation></Navigation>,
  },
  {
    path: "/register",
    element: <Registerlayout></Registerlayout>,
  },
  {
    path: "/viewdetails",
    element: <RecipesDetails></RecipesDetails>,
  },

  {
    path: "/viewdetails/:id",
    element:  <PrivetRout><RecipeDataLoader></RecipeDataLoader></PrivetRout>,
    loader: ({ params }) => fetch(`http://localhost:5000/chef/${params.id}`)

  }


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
