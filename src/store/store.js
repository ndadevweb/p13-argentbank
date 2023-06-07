import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import authReducer from '../features/authSlice'
import { initializeAuthentication } from '../features/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
})

store.dispatch(initializeAuthentication());

export default store