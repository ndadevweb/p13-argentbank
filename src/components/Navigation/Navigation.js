import { authenticated, clearAuth } from '../../features/authSlice'
import { getUser, clearUser, fetchUserProfile } from '../../features/userSlice'
import { useSelector, useDispatch } from 'react-redux'

import argentBankLogo from '../../assets/logo/argentBankLogo.png'
import { NavStyled, LinkLogoStyled, LinkSignInStyled, ImgLogoStyled } from './styles'
import { useEffect } from 'react'

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
    if(isAuthenticated && user.id === null) {
      dispatch(fetchUserProfile())
    }
  }, [isAuthenticated, dispatch, user])

  function logout() {
    dispatch(clearAuth())
    dispatch(clearUser())
  }

  return (
    <NavStyled>
      <LinkLogoStyled to="/">
        <ImgLogoStyled src={ argentBankLogo } alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </LinkLogoStyled>

      {
        isAuthenticated === false ? (
          <div>
            <LinkSignInStyled to="/login">
              <i className="fa fa-user-circle"></i> Sign In
            </LinkSignInStyled>
          </div>
        ) : (
          <div>
            <LinkSignInStyled to="/profile">
              <i className="fa fa-user-circle"></i> { user.firstName }
            </LinkSignInStyled>
            <LinkSignInStyled
              to="/"
              onClick={ () => logout() }
            >
            <i className="fa fa-sign-out"></i> Sign Out
            </LinkSignInStyled>
          </div>
        )
      }
    </NavStyled>
  )
}
