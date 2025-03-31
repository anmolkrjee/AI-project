import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from './Component/Landing'
import LogIn from './Component/LogIn'
import SignUp from './Component/SignUp'
import Home from './Component/HomePage'
import About from './Component/About'
import Contact from './Component/Contact'
import Error404 from './Component/Error'

import { TeamMember } from './ElementData/AboutData';

export default function App() {
  const [Data, setData] = useState(TeamMember)
  const navbarRouter = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/login',
      element: <LogIn />
    },
    {
      path: '/signup',
      element: <SignUp />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/about',
      element: <About item={Data } />
    },
    {
      path: '/contact',
      element: <Contact />
    },
    {
      path: '*',
      element: <Error404 />
    }
  ])

  return (
    <>
      <RouterProvider router={navbarRouter} />
    </>
  );
}