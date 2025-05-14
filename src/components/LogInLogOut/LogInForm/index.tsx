import { useState, ChangeEvent, SyntheticEvent, MouseEvent, useCallback } from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { showSignUp, dontShowLoginOrSignUp } from '../../../store/redux/slices/logInSlice/loginStore';
import { thunkLogin } from '../../../store/redux/thunks/authThunks';

import Close from '../../TableOptions/DeleteTable/DeleteDialog/img/Close'
import styles from './loginForm.module.scss';

const LoginForm =()=>{
    const [username, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [] = useState<boolean>(false);

    const dispatch = useAppDispatch();
 
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
        dispatch(thunkLogin({username,password}));
     }

     const handleClose = useCallback((ev:MouseEvent<HTMLElement>) =>{
        ev.preventDefault();
        dispatch(dontShowLoginOrSignUp());

     }, [])

     const handlesignUpClick =(ev:MouseEvent<HTMLButtonElement>) =>{
        ev.preventDefault();
        dispatch(showSignUp());
     }
 

    return (
        <div className={styles.mainLoginCont}>
            <div className={styles.header}><Close handleClose={handleClose} /><span>Login</span><span></span></div>
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
                    <button className={styles.signUpButton} onClick={handlesignUpClick}>Sign Up</button>
                </div>
        </div>
    );
    };


export default LoginForm;