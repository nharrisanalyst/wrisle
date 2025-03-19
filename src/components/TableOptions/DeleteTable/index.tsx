import {useState, MouseEvent} from 'react';
import TrashIMG from "./img/TrashIMG";
import '../tableOption.scss';
import DeleteDialog from './DeleteDialog';



type DeleteTableProps ={
    name:string;
    id:string;
}


const DeleteTable=({name:id}:DeleteTableProps)=>{
    const [openDialog, setOpenDialog] =useState<boolean>(false);
    const handleDelete =(ev:MouseEvent<HTMLButtonElement>) =>{
        ev.preventDefault();


        setOpenDialog(false);
    }

    const handleClose =(ev:MouseEvent<HTMLButtonElement>)=>{
         ev.preventDefault();
        setOpenDialog(false);
    }

    const handleOpen = (ev:MouseEvent<HTMLButtonElement>) =>{
        ev.preventDefault();
        setOpenDialog(true);
    }

    const DiolagBox = openDialog?(<DeleteDialog
        deleteText={'Delete'}
        deleteNoun={name}
        onDelete={handleDelete}
        onClose={handleClose}
        actionButtonText={"I want to delete this"}
        actionText={"Warning Pressing delete will delete this table"}/>):null;
    return(
        <>
        <div className='table-option'>
            <button onClick={handleOpen}>
                <span className='option-text'>Delete Table</span>  <TrashIMG />
            </button>
        </div>
        {DiolagBox}
        </>

    )
}

export default DeleteTable;