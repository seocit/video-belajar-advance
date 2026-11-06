import { createBrowserRouter, redirect } from 'react-router'
import RootLayout from './RootLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import HomePage from '../pages/HomePage'
import ProductList from '../pages/ProductList'

export interface RouteHandle {
  showProfile?: boolean
}

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    // Logic untuk membaca dan mengubah URL menjadi lowercase jika ada huruf kapital
    loader: ({ request }) => {
      const url = new URL(request.url)
      if (url.pathname !== url.pathname.toLowerCase()) {
        return redirect(url.pathname.toLowerCase() + url.search + url.hash)
      }
      return null
    },
    children: [
      {
        index: true,
        element: <Login />,
        handle: { showProfile: false },
      },
      {
        path: 'register',
        element: <Register />,
        handle: { showProfile: false },
      },
      {
        path: 'homepage',
        element: <HomePage />,
        handle: { showProfile: true },
      },
      {
        path: 'product',
        element: <ProductList />,
        handle: { showProfile: true },
      },
    ],
  },
])
