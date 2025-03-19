import { ReactNode } from 'react';

type MoreOptions ={
    children:ReactNode;
}

const MoreOptions =({children}:MoreOptions)=>{
    return(
        <span>
           {children}
        </span>
    )

}

export default MoreOptions;