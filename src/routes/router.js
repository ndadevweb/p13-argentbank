import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { Home, Signin } from '../pages/index'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/sign-in',
        caseSensitive: true,
        element: <Signin />
      }
    ]
  }
])