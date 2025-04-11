import {StateCreator} from 'zustand';
import {MyStoreInterface} from './useStore';
import {jwtDecode, JwtPayload} from 'jwt-decode';

const TOKEN_STORAGE_KEY = 'wrisle-jwt-auth-token';

export interface AuthStoreType {
    token:string | null;
    user:{
      name:string
    } | null;
    isLoggedIn:()=>boolean;
    setToken:(newToken:string)=>void;
    logout:()=>void;
}

const useAuthStore:StateCreator<AuthStoreType> = ((set:any)=>({
    token:localStorage.getItem(TOKEN_STORAGE_KEY),
    user:null,
    //check for logged int 
    isLoggedIn:()=>{
      const storedToken = localStorage.getItem(TOKEN_STORAGE_KEY);
      if(storedToken){
        try{
          const decodedToken = jwtDecode<JwtPayload>(storedToken);
          //check the token is not expired
          if(decodedToken.exp * 1000> Date.now()){
            return true;
          }else{
            // Token expired, remove it
            localStorage.removeItem(TOKEN_STORAGE_KEY);
            set({token:null,user:null});
            return false;
          }
        } catch (err){
            //invalid token
            localStorage.removeItem(TOKEN_STORAGE_KEY);
            set({token:null,user:null});
            return false; 
        }
      } 
    },
    
    setToken:(newToken:string)=>{
      localStorage.setItem(TOKEN_STORAGE_KEY, newToken);
      set({ token: newToken });
    },
    
    logout:()=>{
      localStorage.removeItem(TOKEN_STORAGE_KEY);
      set({token:null,user:null});
    }
    
}))

export default useAuthStore;