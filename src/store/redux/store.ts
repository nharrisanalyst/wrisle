import { configureStore } from '@reduxjs/toolkit'
import authReducer, { AuthStateType} from './slices/authSlice/authStore';
import loginInPanelReducer from './slices/logInSlice/loginStore'

export interface StateType {
  authorization:AuthStateType
}


export const store = configureStore({
  reducer: {
    authorization:authReducer,
    loginInPanel:loginInPanelReducer
  },
})
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch