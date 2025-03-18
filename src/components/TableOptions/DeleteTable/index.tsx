import {useState} from 'react';
import TrashIMG from "./img/TrashIMG";
import '../tableOption.scss';






const DeleteTable=()=>{
    const {openDialog, setOpenDialog} =useState<boolen>(false);
    return(
        <div className='table-option'>
            <button>
                <span className='option-text'>Delete Table</span>  <TrashIMG />
            </button>
        </div>
    )
}

export default DeleteTable;