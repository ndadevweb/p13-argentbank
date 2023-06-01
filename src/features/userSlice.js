import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const URL_USER_PROFILE = 'http://localhost:3001/api/v1/user/profile'

const headers = (token) => ({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '+token
})

const throwExceptionIfNotAuthenticated = (isAuthenticated) => {
  if(isAuthenticated === false ) {
    throw new Error('You must be authenticated')
  }
}

/**
 * Handle informations about of the user's profile
 */
export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (_, { getState }) => {
    const { auth } = getState()
    const { authenticated, token } = auth

    try {
      throwExceptionIfNotAuthenticated(authenticated)

      const config = {
        method: 'post',
        headers: headers(token)
      }

      const response = await fetch(URL_USER_PROFILE, config)

      if(response.ok === false) {
        throw new Error('Fetch user profile failed')
      }

      const userProfile = await response.json()

      return userProfile.body
    } catch(error) {
      return error
    }
  }
)

/**
 * Handle update of user's informations
 */
export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async (newUserData, { getState }) => {
    const { auth } = getState()
    const { authenticated, token } = auth

    try {
      throwExceptionIfNotAuthenticated(authenticated)

      const config = {
        method: 'put',
        headers: headers(token),
        body: JSON.stringify(newUserData)
      }

      const response = await fetch(URL_USER_PROFILE, config)

      if(response.ok === false) {
        throw new Error('Update user profile failed')
      }

      const userInformations = await response.json()

      return userInformations.body
    } catch(error) {
      return error
    }
  }
)

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: null,
    email: null,
    firstName: null,
    lastName: null,
    createdAt: null,
    updatedAt: null,
    isLoading: false,
    error: null
  },
  reducers: {
    clearUser: (state) => {
      state.id = null
      state.email = null
      state.firstName = null
      state.lastName = null
      state.createdAt = null
      state.updatedAt = null
      state.isLoading = false
      state.error = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        const { id, email, firstName, lastName, createdAt, updatedAt } = action.payload

        state.id = id
        state.email = email
        state.firstName = firstName
        state.lastName = lastName
        state.createdAt = createdAt
        state.updatedAt = updatedAt
        state.isLoading = false
        state.error = null
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })

      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        const { id, email, firstName, lastName, createdAt, updatedAt } = action.payload

        state.id = id
        state.email = email
        state.firstName = firstName
        state.lastName = lastName
        state.createdAt = createdAt
        state.updatedAt = updatedAt
        state.isLoading = false
        state.error = ''
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  }
})

export const getUser = (state) => state.user

export const { clearUser } = userSlice.actions

export default userSlice.reducer
