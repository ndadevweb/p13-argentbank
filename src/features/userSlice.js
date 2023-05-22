import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userState: {
    isLogged: false,
    token: null,
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    createdAt: null,
    updatedAt: null
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    authenticated: (state, action) => {
      state.userState = {
        isLogged: true,
        token: action.payload
      }

      return state
    },
    storeUserData: (state, action) => {
      const { payload } = action

      state.userState.id = payload.id
      state.userState.firstName = payload.firstName
      state.userState.lastName = payload.lastName
      state.userState.email = payload.email
      state.userState.createdAt = payload.createdAt
      state.userState.updatedAt = payload.updatedAt
    },
    updateUserData: (state, action) => {
      const { payload } = action

      state.userState.firstName = payload.firstName
      state.userState.lastName = payload.lastName
    },
    signout: (state, action) => {
      return initialState
    }

  }
})

export const { authenticated, storeUserData, updateUserData, signout } = userSlice.actions

export const getUser = (state) => state.user.userState

export default userSlice.reducer