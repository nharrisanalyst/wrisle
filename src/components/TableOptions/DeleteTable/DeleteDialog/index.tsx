import { MouseEvent } from 'react';
import './deleteDialog.scss';
import Close from './img/Close';

type DeleteDialogProps ={
    deleteText: string;
    deleteNoun:string;
    onDelete:(ev:MouseEvent<HTMLElement>)=>void;
    onClose:(ev:MouseEvent<HTMLElement>)=>void;
    actionButtonText:string;
    actionText:string;
}



const DeleteDialog = ({deleteText,deleteNoun, onClose, onDelete, actionText, actionButtonText}:DeleteDialogProps)=>{
    return( 
       <div className='dialog-box'>
            <div className='dialog-box-box'>
                <div className='dialog-box-title'>
                    <span>{deleteText}{" "}{deleteNoun}</span> <Close handleClose={onClose} />
                </div>
                <div className='action-text'>
                    {actionText}
                </div>
                <div className='dialog-action-buttons'>
                    <div className='action-text-button-div'>
                        <button onClick={onDelete}  className='action-text-button'>{actionButtonText}</button>
                    </div>
                </div>
            </div>
        </div>
       )
}

export default DeleteDialog;