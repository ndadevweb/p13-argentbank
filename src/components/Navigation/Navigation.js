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
    if(isAuthenticated === true) {
      dispatch(fetchUserProfile())
    }
  }, [isAuthenticated, dispatch])

  /**
   * Clear data from redux store
   */
  function logout() {
    dispatch(clearAuth())
    dispatch(clearUser())
  }

  return (
    <nav className={ classes.mainNav }>
      <Link className={ classes.mainNavLogo } to="/">
        <img src={ argentBankLogo } alt="Argent Bank Logo" className={ classes.mainNavLogoImage }/>
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {
          isAuthenticated === false ? (
            <Link className={ classes.mainNavItem } to="/login">
              <i className="fa fa-user-circle"></i> Sign In
            </Link>
          ) : (
            <>
              <Link className={ classes.mainNavItem } to="/profile">
                <i className="fa fa-user-circle"></i>
                { user.firstName }
              </Link>

              <Link className={ classes.mainNavItem } to="/" onClick={ () => logout() }>
                <i className="fa fa-sign-out"></i>
                Sign Out
              </Link>
            </>
          )
        }
      </div>
    </nav>
  )
}
