import { useState, MouseEvent } from 'react';
import MoreOptions from './';
import DeleteTable from '../TableOptions/DeleteTable';
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
    const Options = optionOpen?(<MoreOptions>
                        <DeleteTable tableName={name} id={id} />
                    </MoreOptions>):null
    return(
                <>
                <ThreeDots onClick={handleOpenClose} />
                {Options}
                </>
            )
}


export default TableOptions;

