import { combineReducers } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'

const rootReducer = combineReducers({
    auth: authReducer
    // Add other reducers as needed
})

export default rootReducer
