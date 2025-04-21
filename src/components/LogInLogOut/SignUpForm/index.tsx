import {useState, ChangeEvent} from 'react';
import Close from '../../TableOptions/DeleteTable/DeleteDialog/img/Close'

import styles from '../LogInForm/loginForm.module.scss';


const SignUpForm = ()=>{
    const [userName, setuserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [firstname, setFirstName] = useState<string>("");
    const [lastname, setLastName] = useState<string>("");
    const [dob, setDOB] = useState<Date|null>(null);

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

    const handleSubmit = (ev:SyntheticEvent<HTMLFormElement>):void =>{
        ev.preventDefault()
        const headers ={
            'Content-Type': 'application/json',
          }
         const LOGIN_URL= `${API_URL}/auth/register`;
         const bodyFormData = new FormData();
         userData = {
            "eamil":email,
            'password':passsword,
            "firstname":firstname,
            "lastname":lastname,
            "birthdate":dob


         }
         
         axios.post(LOGIN_URL,bodyFormData,headers)
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
        <form className={styles.form}>
            <label>
                Name
                <input className={styles.input}  placeholder="First Name"  type="text" name="name" id="name" onChange={handlefirstName} required />
                <input className={styles.input}  placeholder="Last Name"  type="text" name="name" id="name" onChange={handlelastName} required />
            </label>
            <label>
                Date of birth
                <input className={styles.input} placeholder="First Name"  type="date" name="name" id="name" onChange={handleDOB} required />
            </label>

        </form>
        </div>
    </div>
     )
}


export default SignUpForm;