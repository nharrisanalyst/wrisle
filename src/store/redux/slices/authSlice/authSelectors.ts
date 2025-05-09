
import {StateType} from '../../store';

const selectAuth = (state:StateType) => state.authorization;

const selectLoggedIn = (state:StateType) =>{
    const auth = selectAuth(state);
    // we double check first check that the state is logged in
    // 2nd we check we have a valid JWT token and it is not expired
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
    return false; 
}