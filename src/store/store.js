import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../features/userSlice'
import authReducer from '../features/authSlice'
import { checkTokenFromLocalStorage } from '../features/authSlice'

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer
  },
})

store.dispatch(checkTokenFromLocalStorage());

export default store