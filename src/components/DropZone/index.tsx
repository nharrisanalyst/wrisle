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
        <div className='drop-zone-cont'>   
            <span className='upload-text'> Upload .CSV</span>
            <div className='data-drop'>
                <div id='drop_zone'
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                >
                Drag and drop your CSV file. Only .csv files are supported.
                </div>
            </div>
            <div className='input-file'>
                    <form>
                        <label htmlFor="fileSelect">Choose a .CSV file: </label>
                        <input id="fileSelect" type="file"  name="fileSelect" accept=".csv" />
                    </form>
                </div>
        </div> 
    )
}

export default DropZone;