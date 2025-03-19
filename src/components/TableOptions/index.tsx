import { ReactNode } from 'react';
import './options.scss';

type OptionsProps ={
    children:ReactNode;
}

const Options =({children}:OptionsProps)=>{
    <div className='options-component'>
        {children}
    </div>
}

export default Options;