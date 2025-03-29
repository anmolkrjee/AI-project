import React, { useState } from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Landing from './Component/Landing'

export default function App() {
  const navbarRouter = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    }
  ])

  return (
    <>
      <RouterProvider router={navbarRouter} />
    </>
  );
}