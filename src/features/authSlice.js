import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const URL_AUTH = 'http://localhost:3001/api/v1/user/login'

/**
 * Handle authentication of an user
 */
export const authenticate = createAsyncThunk(
  'auth/authenticate',
  async ( { login, password, rememberMe = false }, { rejectWithValue } ) => {
    const url = URL_AUTH

    const config = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: login,
        password: password
      })
    }

    try {
      const response = await fetch(url, config)

      if(response.ok === false) {
        throw new Error('Authentication failed')
      }

      const authData = await response.json()
      const token = authData.body.token

      if(rememberMe === true) {
        localStorage.setItem('auth', token)
      }

      return token
    } catch(error) {
      return rejectWithValue(error.message)
    }
   }
)

/**
 * Handle to check if JSON Web Token exists and update state
 * only if the JWT exists in local storage and the state is empty
 */
export const initializeAuthentication = createAsyncThunk(
  'auth/initializeAuthentication',
  async (_, { dispatch }) => {
    const token = localStorage.getItem('auth')

    if(token !== null) {
      const payload = { token, isAuthenticated: true }
      dispatch(refreshAuth(payload))
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoading: false,
    isAuthenticated: false,
    token: null,
    error: null
  },
  reducers: {
    clearAuth: (state) => {
      state.isAuthenticated = false
      state.token = null
      state.error = null
      localStorage.removeItem('auth')
    },
    clearErrorAuth: (state) => {
      state.error = null
    },
    refreshAuth: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated
      state.token = action.payload.token
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticate.pending, (state) => {
        state.isLoading = true
        state.isAuthenticated = false
        state.error = null
      })
      .addCase(authenticate.fulfilled, (state, action) => {
        state.token = action.payload
        state.isLoading = false
        state.isAuthenticated = true
        state.error = null
      })
      .addCase(authenticate.rejected, (state, action) => {
        state.isLoading = false
        state.isAuthenticated = false
        state.error = action.payload
      })
  }
})

export const authenticated = (state) => state.auth.isAuthenticated

export const authenticationError = (state) => state.auth.error

export const { clearAuth, clearErrorAuth, refreshAuth } = authSlice.actions

export default authSlice.reducer
