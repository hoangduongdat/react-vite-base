import { combineReducers } from '@reduxjs/toolkit'
import authReducer, { AuthState } from './slices/authSlice'

export type RootReducerState = {
    auth: AuthState
}

const rootReducer = combineReducers({
    auth: authReducer
    // Add other reducers as needed
})

export default rootReducer
