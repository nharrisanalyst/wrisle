import './deleteDialog.scss';

type DeleteDialogProps ={
    text: string;
    onDelete:()=>void;
    onClose:()=>void;
    isOpen:boolean;
    actionButtonText:string;
    actionText:string;
    isDelete?:boolean;
}



const DeleteDialog = ({text, onDelete, onClose, isOpen, actionText, actionButtonText,isDelete}:DeleteDialogProps)=>{
    const styleDelete = isDelete?{'color':'rgb(224, 22, 22, 0.85)'}:{'color':'inherit'}
    return( 
       <div className='dialog-box'>
            <div className='dialog-box-box'>
                <div className='dialog-box-title'>
                    {text}
                </div>
                <div className='action-text'>
                    {actionText}
                </div>
                    <div className='dialog-action-buttons'>
                <div>
                <button className='close-button'>Close</button>
                </div>
                <div>
                    <button style={styleDelete} className='action-text-button'>{actionButtonText}</button>
                </div>
                </div>
            </div>
        </div>
       )
}

export default DeleteDialog;