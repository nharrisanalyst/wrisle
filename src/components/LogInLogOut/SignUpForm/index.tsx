import axios from 'axios';
import {useState, ChangeEvent, SyntheticEvent} from 'react';
import Close from '../../TableOptions/DeleteTable/DeleteDialog/img/Close'
import {API_URL} from '../../../Constants';

import styles from '../LogInForm/loginForm.module.scss';


const SignUpForm = ()=>{
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstname, setFirstName] = useState<string>("");
    const [lastname, setLastName] = useState<string>("");
    const [dob, setDOB] = useState<string>("");

    console.log(styles.label)

    const handlefirstName = (ev:ChangeEvent<HTMLInputElement>):void =>{
        ev.preventDefault();
        const userName = ev.target.value;
        setFirstName(userName);
   
    } 

    const handlelastName = (ev:ChangeEvent<HTMLInputElement>):void =>{
        ev.preventDefault();
        const userName = ev.target.value;
        setLastName(userName);
   
    } 

    const handleDOB =(ev:ChangeEvent<HTMLInputElement>):void=>{
        ev.preventDefault();
        const dob = ev.target.value;
        setDOB(dob);
    }
   
   const handlePassword = (ev:ChangeEvent<HTMLInputElement>): void =>{
        ev.preventDefault();
        const inputPassword = ev.target.value;
        setPassword(inputPassword);
    }

    const handleEmail = (ev:ChangeEvent<HTMLInputElement>): void =>{
        ev.preventDefault();
        const email = ev.target.value;
        setEmail(email);
    }

    const handleSubmit = (ev:SyntheticEvent<HTMLFormElement>):void =>{
        ev.preventDefault()
        const headers ={
            'Content-Type': 'application/json',
          }
        const LOGIN_URL= `${API_URL}/auth/register`;
        const  userData = {
            "email":email,
            'password':password,
            "first_name":firstname,
            "last_name":lastname,
            "birthday":dob


         }
         
         axios.post(LOGIN_URL,userData,headers)
                 .then(function(response){
                     console.log(response)
                 })
                 .catch(function(error){
                     console.log(error)
                 })
 
     }

     return (

    <div>
        <div className={styles.mainLoginCont}>
        <div className={styles.header}><Close handleClose={()=>{}} /><span>Sign Up</span><span></span></div>
        <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.label}>
                Name
                <input className={styles.input}  placeholder="First Name"  type="text" name="name" id="name" onChange={handlefirstName} required />
                <input className={styles.input}  placeholder="Last Name"  type="text" name="name" id="name" onChange={handlelastName} required />
            </label>
            <label className={styles.label}>
                Date of birth
                <input className={styles.input} placeholder="First Name"  type="date" name="name" id="name" onChange={handleDOB} required />
            </label>
            <label className={styles.label}>
                Contact Info
                <input className={styles.input} placeholder="Email"  type="email" name="name" id="name" onChange={handleEmail} required />
            </label>
            <label className={styles.label}>
                Password
                <input className={styles.input} placeholder="Password" type="password" name="password" id="password" onChange={handlePassword} required />
            </label>
            <div>
                <input className={styles.submit} style={{marginBottom:'30px'}} type="submit" value="Continue" />
            </div>
        </form>
        </div>
    </div>
     )
}


export default SignUpForm;