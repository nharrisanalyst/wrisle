import { MouseEvent, useState } from 'react';
import { TableSVG } from './TableSVG';
import RightDown from './TableSVG/RightDownSVG/RightDown';

import './tableSide.scss';

const TableSide =()=>{
    const [open, setOpen] =useState<boolean>(false);
    const handleClick=(ev:MouseEvent<HTMLButtonElement>)=>{
        console.log('clicked')
        ev.preventDefault();
        if(open){
            console.log('here')
            setOpen(false);
        }else{
            setOpen(true);
        }
    }

    

     return(
        <div className='side-container-comp'>
            <button onClick={handleClick}>
            <RightDown right={!open} />     <TableSVG/> <span className='side-panel-title'>Tables</span>
            </button>
        </div>
     )
}

export default TableSide;