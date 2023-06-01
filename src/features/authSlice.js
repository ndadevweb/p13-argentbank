import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

/**
 * Handle authentication of an user
 */
export const authenticate = createAsyncThunk(
  'auth/authenticate',
  async ( { login, password, rememberMe = false } ) => {
    const url = 'http://localhost:3001/api/v1/user/login'

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
      throw error
    }
  }
)

/**
 * Handle to check if JSON Web Token exists and update state
 * only if the JWT exists in local storage and the state is empty
 */
export const checkTokenFromLocalStorage = createAsyncThunk(
  'auth/checkTokenFromLocalStorage',
  async (_, { dispatch }) => {
    const token = localStorage.getItem('auth')

    if (token !== null) {
      dispatch(refresh(token))
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
      localStorage.removeItem('auth')
    },
    refresh: (state, action) => {
      state.isAuthenticated = true
      state.token = action.payload
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
        state.error = action.error.message
      })
  }
})

export const authenticated = (state) => state.auth.isAuthenticated

export const authenticationError = (state) => state.auth.error

export const { clearAuth, refresh } = authSlice.actions

export default authSlice.reducer
