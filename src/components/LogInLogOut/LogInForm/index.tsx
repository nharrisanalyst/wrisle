import { useState, ChangeEvent, SyntheticEvent } from 'react';
import axios from 'axios';

import {API_URL} from '../../../Constants';
import Close from '../../TableOptions/DeleteTable/DeleteDialog/img/Close'
import styles from './loginForm.module.scss';

const LoginForm =()=>{
    const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
 
    const handleUserName = (ev:ChangeEvent<HTMLInputElement>):void =>{
         ev.preventDefault();
         const userName = ev.target.value;
         setUserName(userName);
    
     } 
    
    const handlePassword = (ev:ChangeEvent<HTMLInputElement>): void =>{
         ev.preventDefault();
         const inputPassword = ev.target.value;
         setPassword(inputPassword);
     }
 
     const handleSubmit = (ev:SyntheticEvent<HTMLFormElement>):void =>{
         const LOGIN_URL= `${API_URL}/login`;
         ev.preventDefault()
         const loginInfo = {
             username:username,
             password:password
         }
         axios.post(LOGIN_URL,loginInfo)
                 .then(function(response){
                     console.log(response)
                 })
                 .catch(function(error){
                     console.log(error)
                 })
 
     }
 

    return (
        <div className={styles.mainLoginCont}>
            <div><Close handleClose={()=>{}} /><span>Login</span></div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: 
                        <input type="text" name="name" id="name" onChange={handleUserName} required />
                    </label>
                </div>
                <div>
                    <label>Password: 
                        <input type="text" name="password" id="password" onChange={handlePassword} required />
                     </label>
                </div>
                <div>
                    <input type="submit" value="login" />
                </div>
            </form>
        </div>
    );
    };


export default LoginForm;