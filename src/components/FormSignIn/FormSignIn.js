import { useState } from 'react'
import {
  SignInContentStyled,
  SignInIconStyled,
  InputWrapperStyled,
  InputRememberStyled,
  ButtonSubmitStyled
} from './styles'
import { useNavigate } from 'react-router'

import { useDispatch } from 'react-redux'
import { authenticated } from '../../features/userSlice'


export default function FormSignIn() {
  const navigate = useNavigate()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const dispatch = useDispatch()

  async function handleSubmit(event) {
    event.preventDefault()


    // DEV LOGIN
    await fetch('http://localhost:3001/api/v1/user/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: username, password
      })
    })
    .then(response => response.json())
    .then(responseJson => {
      const isLogged = responseJson.status === 200

      if(isLogged === true) {
        dispatch(authenticated(responseJson.body.token))
        navigate('/profile')
      }


    })
    .catch(error => console.log(error))
  }

  function handleChangeField(event) {
    switch(event.target.name) {
      case 'username':
        setUsername(event.target.value)
        break

      case 'password':
        setPassword(event.target.value)
        break

      case 'rememberMe':
        setRememberMe(event.target.checked)
        break

      default:

    }
  }

  return (
    <SignInContentStyled>
      <SignInIconStyled className="fa fa-user-circle"></SignInIconStyled>
      <h1>Sign In</h1>
      <form autoComplete="off" onSubmit={ handleSubmit }>
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
