import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { ButtonStyled } from '../../components/Button/Button'
import { InputStyled } from '../../components/Forms/styles'

import { ContainerStyled, Title1Styled, FormUserEditStyled } from './styles'

import Account from '../../components/Account/Account'
import { authenticated } from '../../features/authSlice'
import { fetchUserProfile, updateUserProfile } from '../../features/userSlice'
import { getUser } from '../../features/userSlice'

/**
 * Component to display the user profile page
 * Only access if the user is logged
 *
 * @returns <Profile />
 */
export default function Profile() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isEditActive, setEditActive] = useState(false)

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const isAuthenticated = useSelector(authenticated)
  const user = useSelector(getUser)

  useEffect(() => {
    if(isAuthenticated === false) {
      navigate('/')
    }

    if(isAuthenticated === true && user.id === null) {
      dispatch(fetchUserProfile())
    }
  }, [isAuthenticated, user, navigate, dispatch])

  function handleEditActive() {
    setEditActive(isEditActive === false)
    setFirstName(user.firstName)
    setLastName(user.lastName)
  }

  function handleEditUser(event) {
    event.preventDefault()

    const userDataToUpdate = {
      firstName, lastName
    }

    dispatch(updateUserProfile(userDataToUpdate))
  }

  function handleCancelEditUser(event) {
    event.preventDefault()

    setFirstName(user.firstName)
    setLastName(user.lastName)
  }

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
        accountAmount.map((props, index) => <Account key={ index } { ...props } />)
      }
    </main>
  )
}
