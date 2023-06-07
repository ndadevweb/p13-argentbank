import { authenticated, clearAuth } from '../../features/authSlice'
import { getUser, clearUser, fetchUserProfile } from '../../features/userSlice'
import { useSelector, useDispatch } from 'react-redux'

import classes from './Navigation.module.css'
import argentBankLogo from '../../assets/logo/argentBankLogo.png'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

/**
 * Component to display website navigation and user's informations
 *
 * @returns <Navigation />
 */
export default function Navigation() {

  const dispatch = useDispatch()
  const isAuthenticated = useSelector(authenticated)
  const user = useSelector(getUser)

  useEffect(() => {
    dispatch(fetchUserProfile())
  }, [isAuthenticated, dispatch])

  /**
   * Clear data from redux store
   */
  function logout() {
    dispatch(clearAuth())
    dispatch(clearUser())
  }

  return (
    <nav className={ classes.navigation }>
      <Link className={ classes.linkLogo } to="/">
        <img src={ argentBankLogo } alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <ul>
        {
          isAuthenticated === false ? (
              <li>
                <Link to="/login">
                  <i className="fa fa-user-circle"></i> Sign In
                </Link>
              </li>
          ) : (
              <>
                <li>
                  <Link to="/profile">
                    <i className="fa fa-user-circle"></i> { user.firstName }
                  </Link>
                </li>
                <li>
                  <Link to="/" onClick={ () => logout() }>
                    <i className="fa fa-sign-out"></i> Sign Out
                  </Link>
                </li>
              </>
          )
        }
      </ul>
    </nav>
  )
}
