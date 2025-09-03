import React from 'react'
import { RouterProvider } from 'react-router'
import { createBrowserRouter } from 'react-router'
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';

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
          path: "projects",
          Component: ProjectPage,
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
