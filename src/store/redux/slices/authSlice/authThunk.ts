import {jwtDecode, JwtPayload} from 'jwt-decode'




export const JWT_KEY = 'fkdjkafjhdskljafhjdklashfkjdafhjkdafhffdjhafl'
//used for settting up initial state
export const authAndReturnToken = ():['LOGGED_OUT'|'LOGGED_IN', string|null] =>{

    const storedToken = localStorage.getItem(JWT_KEY);

    if(storedToken){
        try{

        const decodedToken = jwtDecode<JwtPayload>(storedToken);
        if(decodedToken.exp * 1000> Date.now()){
          return ['LOGGED_IN' , storedToken];
        }else{
            return ['LOGGED_OUT' , null];
        }
        }catch(err){
            return ['LOGGED_OUT' , null];
        }


    } 
}