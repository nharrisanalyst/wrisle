import axios from 'axios';
import {loggingIn, logOut, loggedIn, logInErr,setToken , JWT_KEY, UserInterface, loginPayload} from '../slices/authSlice/authStore';
import {dontShowLoginOrSignUp} from '../slices/logInSlice/loginStore'
import {jwtDecode, JwtPayload} from 'jwt-decode';
 
const URL = import.meta.env.VITE_WRISLE_API_URL;
const URL_LOGIN = "auth/jwt/login";
const FULL_URL_LOGIN = import.meta.env.VITE_WRISLE_API_URL + URL_LOGIN;
interface LoginThunkType {
        username:string;
        password:string;
}

export const thunkLogin = ({username,password}:LoginThunkType) =>{
    
    const userData ={username,password};
    return async function(dispatch:any, getState:any){
        
        dispatch(loggingIn());
        try{

            //POST log in returns jwt token
            const headers ={
                'Content-Type': 'application/x-www-form-urlencoded',
              }
            const bodyFormData = new FormData();
            bodyFormData.append('username', username);
            bodyFormData.append('password',password);

            const response = await axios.post(FULL_URL_LOGIN,bodyFormData,headers);
            //console.log('this is the response',response)
            if(response.status === 200 && response.statusText == "OK"){
                const token = response.data.access_token
                //localStorage.setItem(JWT_KEY, token);
                const decoded_token = jwtDecode(token);
                console.log(decoded_token ,'wow decoded')
               
              try{
                // GET user/me retuns data about current user
                const response_user = await axios.get(URL+'users/me',{
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                const data = response_user.data;
                const user:UserInterface = {
                    id:data.id,
                    email:data.email,
                    firstName:data.first_name,
                    lastName:data.last_name,
                    birthday:data.birthday
                }
                const loginPayload:loginPayload =  {
                    token,
                    user
                }
                dispatch(loggedIn(loginPayload));
                dispatch(dontShowLoginOrSignUp());
              }catch(err:any){
                dispatch(logInErr({error: err.message}));
              }
            } 
        }catch(err:any){
            console.log('wow there was an error', err)
            dispatch(logInErr({error: err.message}));
        }

    }

}