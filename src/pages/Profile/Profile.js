import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useSelector, useDispatch } from 'react-redux'

import { THEME_BG_DARK } from '../../components/Main/Main'
import { Main, Accounts, Button, Alert } from '../../components/'

import { authenticated } from '../../features/authSlice'
import { getUser, fetchUserProfile, updateUserProfile, getUserError, clearEdit } from '../../features/userSlice'

import classes from './Profile.module.css'
import { useDocumentTitle } from '../../hooks/useDocumentTitle'

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
  const [isValidForm, setIsValidForm] = useState(true)

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const isAuthenticated = useSelector(authenticated)
  const user = useSelector(getUser)
  const error = useSelector(getUserError)

  useDocumentTitle('Profile '+user.firstName+' - '+user.lastName)

  useEffect(() => {
    if(isAuthenticated === false) {
      navigate('/')
    }

    if(isAuthenticated === true) {
      dispatch(fetchUserProfile())
    }
  }, [isAuthenticated, dispatch, navigate])

  useEffect(() => {
    setIsValidForm(firstName !== '' && lastName !== '')
  }, [firstName, lastName, setIsValidForm])

  /**
   * Display / Edit form to edit user's informations
   */
  function handleEditActive() {
    dispatch(clearEdit())
    setEditActive(isEditActive === false)
    setFirstName(user.firstName)
    setLastName(user.lastName)
  }

  /**
   * Handle form fields
   *
   * @param {Event} event
   * @returns null
   */
  function handleFields(event) {
    const value = event.target.value.trim()

    switch(event.target.name) {
      case 'firstName':
        setFirstName(value)
        break
      case 'lastName':
        setLastName(value)
        break
      default:
        return null
    }

    return null
  }

  /**
   * Handle to Update user's informations
   */
  function handleEditUser() {
    const isEdit = false
    const userDataToUpdate = {
      firstName, lastName, isEdit
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

  const accountInformations = [
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
    <Main theme={ THEME_BG_DARK }>
      <div className={ classes.header }>
        <h1>Welcome back<br />{ user.firstName } { user.lastName }</h1>

        <Button text="Edit Name" handleClick={ handleEditActive } cssClasses={ classes.editButton } />

        {
          isEditActive === false
            ? null
            : (
              <form className={ classes.formEdit } onSubmit={ (event) => event.preventDefault() } autoComplete='off'>

                {
                  user.isEdit === true ? (
                    <Alert text="Your informations have been updated" type="success" customClass={classes.profileAlert} />
                  ) : (user.error !== null) ? (
                    <Alert text={error} type="error" customClass={classes.profileAlert} />
                  ) : null
                }

                <input type="text" name="firstName" className={ classes.profileFirstName } value={ firstName } onInput={ (event) => handleFields(event) } />
                <input type="text" name="lastName" className={ classes.profileLastName } value={ lastName } onInput={ (event) => handleFields(event) } />

                <Button handleClick={ handleEditUser } text="Save" isDisabled={ isValidForm === false } />
                <Button handleClick={ handleCancelEditUser } text="Cancel" />
              </form>
            )
        }
      </div>

      <Accounts accountInformations={ accountInformations }/>
    </Main>
  )
}
