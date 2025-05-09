import SignUpForm, {ReactNode} from '../SignUpForm';
import LoginForm from '../LogInForm/index';

import { useAppSelector } from '../../../hooks/reduxHooks';
import { selectLoginPanel } from '../../../store/redux/slices/logInSlice/loginStore';

import style from './loginWalkThrough.module.scss';


const LoginWalkthrough =()=>{
    const logInPanelState = useAppSelector(selectLoginPanel);

    let form: ReactNode  = null
    if(logInPanelState === "SHOW_LOGIN"){
        form = (<LoginForm />);
    }
    if(logInPanelState === "SHOW_SIGN_UP"){
        form = <SignUpForm />;
    }

    if(logInPanelState === "SHOW_LOGIN" || logInPanelState === "SHOW_SIGN_UP"){
        return (
            <div className={style.loginBox} >
                {form}
            </div>
        )
    }

    return  form;
    
}

export default LoginWalkthrough;