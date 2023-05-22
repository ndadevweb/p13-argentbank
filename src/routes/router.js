import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Home, Signin, Profile, Transactions } from '../pages/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/login',
        caseSensitive: true,
        element: <Signin />
      },
      {
        path: '/profile',
        caseSensitive: true,
        element: <Profile />
      },
      {
        path: '/transactions',
        caseSensitive: true,
        element: <Transactions />
      }
      // {
      //   path: '*', element: <ErrorPage />
      // }
    ]
  }
])