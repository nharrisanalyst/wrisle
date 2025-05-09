import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'


interface LogInPanelStore {
    loginInPanel:"SHOW_LOGIN"|"SHOW_SIGN_UP"|"DONT_SHOW";
}

const logInPanelInit:LogInPanelStore ={
    loginInPanel:'DONT_SHOW'
}

//This is a store logInPanel that controls showing the loging panel 

export const logInPanelSlice =createSlice({
    name:'logInPanel',
    initialState:logInPanelInit,
    reducers:{
        showLogIn:(state:LogInPanelStore) =>{
            state.loginInPanel = "SHOW_LOGIN";
        },
        showSignUp:(state:LogInPanelStore) =>{
            state.loginInPanel = "SHOW_SIGN_UP";
        },
        dontShowLoginOrSignUp:(state:LogInPanelStore) =>{
            state.loginInPanel = "DONT_SHOW";
        }
    }
})


export const { showLogIn, showSignUp, dontShowLoginOrSignUp } = logInPanelSlice.actions;
//selectors

export const selectLoginPanel = (state:RootState) => state.loginInPanel.loginInPanel;

export default logInPanelSlice.reducer;