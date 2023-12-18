import { User } from '@/interfaces/user'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type AuthState = {
    isAuthenticated: boolean
    user: null | User
}

const initialState: AuthState = {
    isAuthenticated: false,
    user: null
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        register: (state, action: PayloadAction<User>) => {
            state.isAuthenticated = true
            state.user = action.payload
        },
        login: (state, action: PayloadAction<User>) => {
            state.isAuthenticated = true
            state.user = action.payload
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
        }
    }
})

export const { login, logout, register } = authSlice.actions

export default authSlice.reducer
