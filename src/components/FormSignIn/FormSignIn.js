import { useEffect, useState } from 'react'
import {
  SignInContentStyled,
  SignInIconStyled,
  InputWrapperStyled,
  InputRememberStyled,
  ButtonSubmitStyled
} from './styles'
import { AlertStyled } from '../Alert/Alert'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate, authenticated, authenticationError, clearErrorAuth } from '../../features/authSlice'

/**
 * Component to display and manage user signin
 *
 * @returns <FormSignIn />
 */
export default function FormSignIn() {
  const navigate = useNavigate()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const dispatch = useDispatch()
  const isAuthenticated = useSelector(authenticated)
  const error = useSelector(authenticationError)

  useEffect(() => {
    if(isAuthenticated === true) {
      navigate('/profile')
    }
  }, [navigate, isAuthenticated])

  useEffect(() => {
    dispatch(clearErrorAuth())
  }, [dispatch])

  /**
   * Handle signin
   *
   * @param {Event} event
   */
  function handleSubmit(event) {
    event.preventDefault()

    const authInformations = {
      login, password, rememberMe
    }

    dispatch(authenticate(authInformations))
  }

  /**
   * Handle update fields
   *
   * @param {Event} event
   * @returns null
   */
  function handleChangeField(event) {
    switch(event.target.name) {
      case 'username':
        setLogin(event.target.value)
        break

      case 'password':
        setPassword(event.target.value)
        break

      case 'rememberMe':
        setRememberMe(event.target.checked)
        break

      default:
        return null
    }

    return null
  }

  return (
    <SignInContentStyled>
      <SignInIconStyled className="fa fa-user-circle"></SignInIconStyled>
      <h1>Sign In</h1>
      <form autoComplete="off" onSubmit={ handleSubmit }>
        {
          error !== null && <AlertStyled>{ error }</AlertStyled>
        }
        <InputWrapperStyled>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" onInput={ handleChangeField } />
        </InputWrapperStyled>

        <InputWrapperStyled>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onInput={ handleChangeField } />
        </InputWrapperStyled>

        <InputRememberStyled>
            <input type="checkbox" id="remember-me" name="rememberMe" onChange={ handleChangeField } />
            <label htmlFor="remember-me">Remember me</label>
        </InputRememberStyled>

        <ButtonSubmitStyled>Sign In</ButtonSubmitStyled>
      </form>
    </SignInContentStyled>
  )
}
