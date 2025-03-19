import './deleteDialog.scss';
import Close from './img/Close';

type DeleteDialogProps ={
    deleteText: string;
    deleteNoun:string;
    onDelete:()=>void;
    onClose:()=>void;
    isOpen:boolean;
    actionButtonText:string;
    actionText:string;
    isDelete?:boolean;
}



const DeleteDialog = ({deleteText,deleteNoun, onDelete, onClose, isOpen, actionText, actionButtonText,isDelete}:DeleteDialogProps)=>{
    const styleDelete = isDelete?{'color':'rgb(224, 22, 22, 0.85)'}:{'color':'inherit'}
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
                        <button  className='action-text-button'>{actionButtonText}</button>
                    </div>
                </div>
            </div>
        </div>
       )
}

export default DeleteDialog;