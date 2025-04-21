import 

type ButtonProps ={
    title:string;
    backgroundColor:string;
    onClick:()=>void;
}

const Button = ({title, backgroundColor, onClick}:ButtonProps) =>{
    <button style={{backgroundColor:backgroundColor}} onClick={()=>{onClick()}}>{title}</button>
}

export default Button;