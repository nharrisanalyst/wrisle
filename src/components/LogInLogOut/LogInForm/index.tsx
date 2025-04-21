import { useState, ChangeEvent, SyntheticEvent } from 'react';
import axios from 'axios';

import {API_URL} from '../../../Constants';
import Close from '../../TableOptions/DeleteTable/DeleteDialog/img/Close'
import styles from './loginForm.module.scss';

const LoginForm =()=>{
    const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [] = useState<boolean>(false);
 
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
        ev.preventDefault()
        const headers ={
            'Content-Type': 'application/x-www-form-urlencoded',
          }
         const LOGIN_URL= `${API_URL}/auth/jwt/login`;
         const bodyFormData = new FormData();
         bodyFormData.append('username', username);
         bodyFormData.append('password',password)
         
         axios.post(LOGIN_URL,bodyFormData,headers)
                 .then(function(response){
                     console.log(response)
                 })
                 .catch(function(error){
                     console.log(error)
                 })
 
     }
 

    return (
        <div className={styles.mainLoginCont}>
            <div className={styles.header}><Close handleClose={()=>{}} /><span>Login</span><span></span></div>
            <div>
                <span className={styles.title}>Welcome to Wrisle</span>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div>
                        <label>
                            <input className={styles.input} placeholder="Email Address"  type="email" name="name" id="name" onChange={handleUserName} required />
                        </label>
                    </div>
                    <div>
                        <label> 
                            <input className={styles.input} placeholder="Password" type="password" name="password" id="password" onChange={handlePassword} required />
                        </label>
                    </div>
                    <div>
                        <input className={styles.submit} type="submit" value="Continue" />
                    </div>
                    
                </form>
                </div>
                <div className={styles.or_title}>or</div>
                <div>
                    <button className={styles.signUpButton}>Sign Up</button>
                </div>
        </div>
    );
    };


export default LoginForm;