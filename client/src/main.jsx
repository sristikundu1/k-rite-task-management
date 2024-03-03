import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import Route from './Pages/Routes/Route'
import AuthProvider from './Providers/AuthProvider'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <Toaster />
  <RouterProvider router={Route}></RouterProvider>
  </AuthProvider>
  </React.StrictMode>,
)
