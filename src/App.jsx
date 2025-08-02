import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import {
  About,
  Cart,
  Error,
  Landing,
  Checkout,
  HomeLayout,
  Login,
  Orders,
  Products,
  SingleProduct,
  Register,
} from './pages'
import{loader as landingLoader} from './pages/Landing'
import{loader as checkoutLoader} from './pages/Checkout'
import{loader as ProductsLoader} from './pages/Products'
import{loader as ordersLoader } from './pages/Orders'
import{loader as SingleProductLoader} from './pages/SingleProduct'
import { action as checkoutAction } from './components/CheckoutForm'
import {ErrorElement} from './components'
import { action as registerAction } from './pages/Register'
import { action as loginAction } from './pages/Login'
import {store} from './store'



const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'products',
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: ProductsLoader,
      },
      {
        path: 'products/:id',
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
        loader:checkoutLoader(store),
        action: checkoutAction(store),
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: ordersLoader(store),
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
    action:loginAction(store),
  },

  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
    action:registerAction
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
