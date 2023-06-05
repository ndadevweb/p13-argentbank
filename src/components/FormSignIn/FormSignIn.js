import { useEffect, useState } from 'react'
import { Alert } from '../'
import { useNavigate } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { authenticate, authenticated, authenticationError, clearErrorAuth } from '../../features/authSlice'
import classes from './FormSignIn.module.css'

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
    <section className={ classes.container }>
      <i className={ `fa fa-user-circle ${ classes.signInIcon }` }></i>
      <h1>Sign In</h1>
      <form autoComplete="off" onSubmit={ handleSubmit }>

        { error !== null ? <Alert text={ error } /> : null }

        <div className={ classes.wrapperField }>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" onInput={ handleChangeField } />
        </div>

        <div className={ classes.wrapperField }>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" onInput={ handleChangeField } />
        </div>

        <div className={ classes.wrapperRememberMe }>
            <input type="checkbox" id="remember-me" name="rememberMe" onChange={ handleChangeField } />
            <label htmlFor="remember-me">Remember me</label>
        </div>

        <button type="submit" className={ classes.btnSubmit }>Sign In</button>
      </form>
    </section>
  )
}
