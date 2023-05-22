import argentBankLogo from '../../assets/logo/argentBankLogo.png'
import { NavStyled, LinkLogoStyled, LinkSignInStyled, ImgLogoStyled } from './styles'

import { getUser, signout } from '../../features/userSlice'
import { useSelector, useDispatch } from 'react-redux'

export default function Navigation() {

  const user = useSelector(getUser)
  const dispatch = useDispatch()

  return (
    <NavStyled>
      <LinkLogoStyled to="/">
        <ImgLogoStyled src={ argentBankLogo } alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </LinkLogoStyled>

      {
        user.isLogged === false ? (
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
              onClick={ () => dispatch(signout()) }
            >
            <i class="fa fa-sign-out"></i> Sign Out
            </LinkSignInStyled>
          </div>
        )
      }
    </NavStyled>
  )
}
