import styled from 'styled-components'

export const SignInContentStyled = styled.section`
  box-sizing: border-box;
  background-color: white;
  width: 300px;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 2rem;
`

export const SignInIconStyled = styled.i`
  font-size: 5rem;
`

export const InputWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-bottom: 1rem;

  label {
    font-weight: bold;
  }

  input {
    padding: 5px;
    font-size: 1.2rem;
  }
`

export const InputRememberStyled = styled.div`
  display: flex;

  label {
    margin-left: 0.25rem;
  }
`

export const ButtonSubmitStyled = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border-color: #00bc77;
  background-color: #00bc77;
  color: #fff;
`