import { configureStore } from '@reduxjs/toolkit'
import authReducer, { AuthStateType} from './slices/authSlice/authStore';

export interface StateType {
  authorization:AuthStateType
}


export const store = configureStore({
  reducer: {
    authorization:authReducer 
  },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch