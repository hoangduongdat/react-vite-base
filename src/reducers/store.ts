// store.ts
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers' // Create this file

const store = configureStore({
    reducer: rootReducer
})

export type RootStoreState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
