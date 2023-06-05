import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { Account, Button } from '../../components/'

import { authenticated } from '../../features/authSlice'
import { fetchUserProfile, updateUserProfile } from '../../features/userSlice'
import { getUser } from '../../features/userSlice'

import classes from './Profile.module.css'

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

  /**
   * Display / Edit form to edit user's informations
   */
  function handleEditActive() {
    setEditActive(isEditActive === false)
    setFirstName(user.firstName)
    setLastName(user.lastName)
  }

  /**
   * Handle to Update user's informations
   */
  function handleEditUser() {
    const userDataToUpdate = {
      firstName, lastName
    }

    dispatch(updateUserProfile(userDataToUpdate))
  }

  /**
   * Reset user's informations only
   * before validation
   */
  function handleCancelEditUser() {
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
      <header className={ classes.container }>
        <h1>
          Welcome back<br />
          { user.firstName } { user.lastName }
        </h1>

        <Button text="Edit Name" handleClick={ handleEditActive } />

        {
          isEditActive === false
            ? null
            : (
              <form className={ classes.formEdit } onSubmit={ (event) => event.preventDefault() }>
                <input type="text" className={ classes.profileFirstName } value={ firstName } onInput={ (event) => setFirstName(event.target.value) } />
                <input type="text" className={ classes.profileLastName } value={ lastName } onInput={ (event) => setLastName(event.target.value) } />

                <Button handleClick={ handleEditUser } text="Save" />
                <Button handleClick={ handleCancelEditUser } text="Cancel" />
              </form>
            )
        }
      </header>

      {/* <h2 className="sr-only">Accounts</h2> */}

      { accountAmount.map((props, index) => <Account key={ index } { ...props } />) }
    </main>
  )
}
