import axios from 'axios';
import { showLogIn} from '../slices/logInSlice/loginStore'


const REGISTER_URL = import.meta.env.VITE_WRISLE_API_URL + 'auth/register';

interface RegisterThunkType {
        email: string;
        password: string;
        first_name: string;
        last_name: string;
        birthday: string;
}

interface RegisterThunkUserType {
    userData:RegisterThunkType
}


export const registerThunk = ({userData}:RegisterThunkUserType) =>{

    return async function(dispatch:any, getState:any){ 

        try{
           const register_response = await axios.post(REGISTER_URL,userData);
           console.log(register_response, 'register_response');
        
           if(register_response.status === 201 && register_response.statusText == "Created"){
                dispatch(showLogIn());
                console.log(getState(), 'this is the state here');
           } 
        }catch(err){

        }
    }
}