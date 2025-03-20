import { ReactNode } from 'react';
import './moreOptions.scss';

type MoreOptions ={
    children:ReactNode;
}

const MoreOptions =({children}:MoreOptions)=>{
    return(
        <div className='table-option-relative'>
            <div className='table-option-abs table-option'>
        <span className='options-table-ran1212'>
           {children}
        </span>
        </div>
        </div>
    )

}

export default MoreOptions;