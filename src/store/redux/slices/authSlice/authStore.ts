import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
 
//logged states
//LOGGED_OUT  LOGGED_IN LOGGING_IN_ERROR

export const JWT_KEY = 'fnjdkabnfdjkabfnjkdabnfkjadnfjkda';
//define state for AUth
export interface UserInterface {
        id:string;
        email:string
        firstName:string;
        lastName:string;
        birthday:string;
}

export type LogStateType = 'LOGGING_IN' |'LOGGED_OUT'|'LOGGED_IN'|'LOGGING_IN_ERROR';

export interface AuthStateType {
     logState: LogStateType;
     user: UserInterface | null;
     error: string|null;
     token:string|null;
}

const getInitialAuthState = ():AuthStateType=>{
   
    return { 
    logState: localStorage.getItem(JWT_KEY)?"LOGGED_IN":"LOGGED_OUT",
    user:null,
    error:null,
    token:localStorage.getItem(JWT_KEY)?localStorage.getItem(JWT_KEY):null
   
    }  
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

//actions logginIN/logOut/logedIn/logInErr/setToken

export const authSlice =createSlice({
    name:'authorization',
    initialState:getInitialAuthState(),
    reducers:{
        loggingIn:(state:AuthStateType)=>{
            state.logState = 'LOGGING_IN';
            state.error = null;
        },
        logOut:(state:AuthStateType)=>{
            state.logState = "LOGGED_OUT";
            state.user = null;
            state.token=null;
        },
        loggedIn:(state:AuthStateType, action: PayloadAction<loginPayload>)=>{
            state.logState ='LOGGED_IN';
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logInErr:(state:AuthStateType, action:PayloadAction<loginErrPayload>)=>{
            state.logState = 'LOGGING_IN_ERROR';
            state.error = action.payload.error;
        },
        setToken:(state:AuthStateType, action:PayloadAction<setTokenPayload>)=>{
            state.token = action.payload.token;
        }
    }
})

export const { loggingIn, logOut, loggedIn, logInErr,setToken} = authSlice.actions;
//selectors

export const selectLoggedIn = (state:RootState) => state.authorization.logState;

export default authSlice.reducer;