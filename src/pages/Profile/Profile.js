import { useEffect, useState } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { getUser, storeUserData, updateUserData } from '../../features/userSlice'

import { ButtonStyled } from '../../components/Button/Button'
import { InputStyled } from '../../components/Forms/styles'

import { ContainerStyled, Title1Styled, FormUserEditStyled } from './styles'

import Account from '../../components/Account/Account'

export default function Profile() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isEditActive, setEditActive] = useState(false)

  const user = useSelector(getUser)
  const dispatch = useDispatch()

  useEffect(() => {

      fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+user.token
        }
      })
      .then(response => response.json())
      .then(responseJson => {

        if(responseJson.status !== 200) {
          return null
        }

        const userData = responseJson?.body

        if(userData?.id === undefined) {
          return null
        }

        dispatch(storeUserData(userData))

        setFirstName(userData.firstName)
        setLastName(userData.lastName)
      })
  }, [user, dispatch])

  function handleEditActive() {
    setEditActive(isEditActive === false)
  }

  function handleEditUser(event) {
    event.preventDefault()

    const userData = {
      firstName, lastName
    }

    fetch('http://localhost:3001/api/v1/user/profile', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer '+user.token
      },
      body: JSON.stringify(userData)
    })
    .then(response => response.json())
    .then(responseJson => {
      if(responseJson.status === 200) {
        const userData = { firstName, lastName }

        dispatch(updateUserData(userData))
      }
    })
  }

  function handleCancelEditUser(event) {
    event.preventDefault()

    setFirstName(user.firstName)
    setLastName(user.lastName)
  }


  // dev data
  const accountAmount = [
    {
      title: 'Argent Bank Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available Balance'
    },
    {
      title: 'Argent Bank Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available Balance'
    },
    {
      title: 'Argent Bank Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current Balance'
    }
  ]


  return (
    <main className="main bg-dark">
      <ContainerStyled>
        <Title1Styled>
          Welcome back<br />
          { user.firstName } { user.lastName }
        </Title1Styled>
        <ButtonStyled onClick={ handleEditActive }>Edit Name</ButtonStyled>

        {
          isEditActive === false
            ? null
            : (
              <FormUserEditStyled>
                  <InputStyled type="text" className="profilFirstName" value={ firstName } onInput={ (event) => setFirstName(event.target.value) } />
                  <InputStyled type="text" className="profilLastName" value={ lastName } onInput={ (event) => setLastName(event.target.value) } />

                  <ButtonStyled className="save" onClick={ handleEditUser }>Save</ButtonStyled>
                  <ButtonStyled className="cancel" onClick={ handleCancelEditUser }>Cancel</ButtonStyled>
              </FormUserEditStyled>
            )
        }
      </ContainerStyled>

      {/* <h2 className="sr-only">Accounts</h2> */}



      {
        accountAmount.map((props, index) => <Account { ...props } />)
      }
    </main>
  )
}
