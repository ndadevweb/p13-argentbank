import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { clearAuth } from './authSlice'

const URL_USER_PROFILE = 'http://localhost:3001/api/v1/user/profile'

const headers = (token) => ({
  'Content-Type': 'application/json',
  'Authorization': 'Bearer '+token
})

/**
 * Handle informations about of the user's profile
 */
export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (_, { getState, dispatch, rejectWithValue }) => {
    const { auth } = getState()
    const { token } = auth

    try {
      const config = {
        method: 'post',
        headers: headers(token)
      }

      const response = await fetch(URL_USER_PROFILE, config)

      if(response.ok === false) {
        if(response.status === 401) {
          dispatch(clearAuth())
        }

        throw new Error('Fetch user profile failed')
      }

      const userProfile = await response.json()

      return userProfile.body
    } catch(error) {
      return rejectWithValue(error.message)
    }
  }
)

/**
 * Handle update of user's informations
 */
export const updateUserProfile = createAsyncThunk(
  'auth/updateUserProfile',
  async (newUserData, { getState, dispatch, rejectWithValue }) => {
    const { auth } = getState()
    const { token } = auth

    try {
      const config = {
        method: 'put',
        headers: headers(token),
        body: JSON.stringify(newUserData)
      }

      const response = await fetch(URL_USER_PROFILE, config)

      if(response.ok === false) {
        if(response.status === 401) {
          dispatch(clearAuth())
        }

        throw new Error('Update user profile failed')
      }

      const userInformations = await response.json()

      return userInformations.body
    } catch(error) {
      return rejectWithValue(error.message)
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
    isEdit: false,
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
      state.isEdit = false
      state.isLoading = false
      state.error = null
    },
    clearEdit: (state) => {
      state.isEdit = null
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
        state.error = action.payload
      })


      .addCase(updateUserProfile.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(updateUserProfile.fulfilled, (state, action) => {
        const { id, email, firstName, lastName, createdAt, updatedAt } = action.payload

        state.isEdit = updatedAt !== state.updatedAt

        state.id = id
        state.email = email
        state.firstName = firstName
        state.lastName = lastName
        state.createdAt = createdAt
        state.updatedAt = updatedAt
        state.isLoading = false
        state.error = null
      })
      .addCase(updateUserProfile.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const getUser = (state) => state.user

export const getUserError = (state) => state.user.error

export const { clearUser, clearEdit } = userSlice.actions

export default userSlice.reducer
