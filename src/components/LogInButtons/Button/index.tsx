import { useCallback, MouseEvent } from 'react';
import { useAppDispatch } from '../../../hooks/reduxHooks';
import style from './Button.module.scss';
import { useAppDispatch } from '../../../hooks/reduxHooks';
type ButtonProps ={
    title:string;
    backgroundColor:string;
    onClick:()=>void;
    show:boolean;
}

const LogInButton = ({title, backgroundColor, onClick, show}:ButtonProps) =>{

    const handleClick = (e:MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        useAppDispatch()
    }
  
    if(!show) return null;
    return(<button className={style.button} style={{backgroundColor:backgroundColor}} onClick={()=>{onClick()}}>{title}</button>)

}


export default LogInButton;