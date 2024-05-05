import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ProjectViewer from './pages/ProjectViewer';
import { Layout } from './layout/layout';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <HomePage />
      },

      {
        path: '/projectView/:name',
        element: <ProjectViewer />
      }
    ]
  },


]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <RouterProvider router={router} />
  </React.StrictMode>
)
