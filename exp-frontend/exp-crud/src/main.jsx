import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './components/Home.jsx'
import Experimento from './components/Experimento.jsx'
import EditExperimento from './components/EditExperimento.jsx'
import ErrorPage from './components/ErrorPage.jsx'

import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  },
  {
    path: '/experimento',
    element: <Experimento />,
  },
  {
    path: '/experimento/:id',
    element: <EditExperimento />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
