import { MouseEvent } from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import { showLogIn } from '../../../store/redux/slices/logInSlice/loginStore';
import style from './Button.module.scss';

type ButtonProps ={
    title:string;
    backgroundColor:string;
    show:boolean;
}

const LogInButton = ({title, backgroundColor, show}:ButtonProps) =>{
    const dispatch = useAppDispatch()
    

    const handleClick = (e:MouseEvent<HTMLButtonElement>)=>{
        console.log('this was clicked');
        e.preventDefault();
        dispatch(showLogIn());
    }
  
    if(!show) return null;
    return(<button className={style.button} style={{backgroundColor:backgroundColor}} onClick={handleClick}>{title}</button>)

}


export default LogInButton;