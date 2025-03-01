import { DragEvent } from 'react';
import './dropZone.scss';

const DropZone =()=>{
    
    function handleDrop(ev:DragEvent<HTMLDivElement>){
        ev.preventDefault();
        console.log('the file has been drop ');
    }

    function handleDragOver(ev:DragEvent<HTMLDivElement>){
        ev.preventDefault();
        console.log('the file has been dragged');
    }

    return (
        <div>   
            <span className='upload-text'> Upload .CSV</span>
            <div className='data-drop'>
                <div id='drop_zone'
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                >
                Drag and drop your CSV file. Only .csv files are supported.
                </div>
            </div>

        </div> 
    )
}

export default DropZone;