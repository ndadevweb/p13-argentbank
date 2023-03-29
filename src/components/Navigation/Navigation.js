import argentBankLogo from '../../assets/logo/argentBankLogo.png'
import { NavStyled, LinkLogoStyled, LinkSignInStyled, ImgLogoStyled } from './styles'

export default function Navigation() {
  return (
    <NavStyled>
      <LinkLogoStyled to="/">
        <ImgLogoStyled src={ argentBankLogo } alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </LinkLogoStyled>

      <div>
          <LinkSignInStyled to="/sign-in">
            <i className="fa fa-user-circle"></i> Sign In
          </LinkSignInStyled>
      </div>
    </NavStyled>
  )
}
