import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import Home from './routes/Home.jsx'
import Experimento from './routes/Experimento.jsx'
import EditExperimento from './routes/EditExperimento.jsx'
import ErrorPage from './routes/ErrorPage.jsx'

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
