import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import router from './routes/router'
import AuthProvider from './provider/AuthProvider';
import 'aos/dist/aos.css';
import { ThemeProvider } from 'next-themes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider attribute='class' defaultTheme="light">
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>,
)
