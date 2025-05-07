import { createSlice } from '@reduxjs/toolkit',
import type { PayloadAction } from '@reduxjs/toolkit'

//logged states
//LOGGED_OUT  LOGGED_IN LOGGING_IN_ERROR


//define state for AUth
interface UserInterface {
        firstName:string;
        lastName:string;
        birthday:Date
}

interface AuthStateType {
     logState:'LOGGED_OUT'|'LOGGED_IN'|'LOGGING_IN_ERROR';
     user: UserInterface | null;
     error: string|null;
     token:string|null;
}

const initAuthState: AuthStateType ={
    logState:"LOGGED_OUT",
    user:null,
    error:null,
    token:null
}

//actions payload interfaces
interface loginPayload {
    token:string;
    user:UserInterface;
}

interface loginErrPayload {
    error:string;
}

interface setTokenPayload {
    token:string;
}

//actions logOut/logIn/logInErr/setToken

export const authSlice =createSlice({
    name:'authorization',
    initialState:initAuthState,
    reducers:{
        logOut:(state:AuthStateType) =>{
            state.logState = "LOGGED_OUT";
            state.user = null;
            state.token=null;
        },
        logIn:(state:AuthStateType, action: PayloadAction<loginPayload>) =>{
            state.logState ='LOGGED_IN';
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logInErr:(state:AuthStateType, action:PayloadAction<loginErrPayload>) =>{
            state.logState = 'LOGGING_IN_ERROR';
            state.error = action.payload.error;
        },
        setToken:(state:AuthStateType, action:PayloadAction<setTokenPayload>) =>{
            state.token = action.payload.token;
        }
    }
})