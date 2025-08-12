import React from 'react'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import RootLayout from './pages/RootLayout';
import Background from './pages/Background';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        {
          index: true,
          Component: HomePage,
        },
        {
          path: "about",
          Component: AboutPage,
        },
        {
          path: "services",
          Component: ServicePage,
        },
        {
          path: "contact",
          Component: ContactPage,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}/>;
}
