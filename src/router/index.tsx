import { createBrowserRouter, redirect } from 'react-router'
import RootLayout from './RootLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import HomePage from '../pages/HomePage'
import ProductList from '../pages/ProductList'

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
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'homepage',
        element: <HomePage />,
      },
      {
        path: 'product',
        element: <ProductList />
      }
    ],
  },
])
