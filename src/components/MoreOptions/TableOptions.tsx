import { useState, MouseEvent } from 'react';
import MoreOptions from './';
import {ThreeDots} from '../../assets/svgs/ThreeDots';

type TableOptions = {
    name:string;
    id:string;
}

const TableOptions = ({name, id}:TableOptions)=>{
    const [optionOpen, setOptionsOpen] = useState<boolean>(false);

    const handleOpen =():void=>{
            setOptionsOpen(true);
    }

    const handleClose =():void=>{
        setOptionsOpen(false);
    }

    const handleOpenClose =(ev:MouseEvent<HTMLSpanElement>):void =>{
        ev.preventDefault();
        if(optionOpen){ handleClose();
        }else{
            handleOpen();
        }
    }
    
    return(
            <MoreOptions>
                <ThreeDots onClick={handleOpenClose} />
            </MoreOptions>
            )
}


export default TableOptions;

