import {
  SignInContentStyled,
  SignInIconStyled,
  InputWrapperStyled,
  InputRememberStyled,
  ButtonSubmitStyled
} from './styles'

export default function FormSignIn() {
  return (
    <SignInContentStyled>
      <SignInIconStyled className="fa fa-user-circle"></SignInIconStyled>
      <h1>Sign In</h1>
      <form>
        <InputWrapperStyled>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
        </InputWrapperStyled>

        <InputWrapperStyled>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </InputWrapperStyled>

        <InputRememberStyled>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
        </InputRememberStyled>

        <ButtonSubmitStyled>Sign In</ButtonSubmitStyled>
      </form>
    </SignInContentStyled>
  )
}
