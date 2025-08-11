import React from 'react'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import RootLayout from './pages/RootLayout';
import Home from './pages/Home';
import Background from './pages/Background';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: Home,
        },
        {
          path: "about",
          Component: Background,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}/>;
}
