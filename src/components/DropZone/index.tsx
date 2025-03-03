import { DragEvent, ChangeEvent } from 'react';
import './dropZone.scss';

const DropZone =()=>{
    
    function handleDrop(ev:DragEvent<HTMLDivElement> ){
        ev.preventDefault()
        if(ev.dataTransfer.items && ev.dataTransfer.items[0]){
            const csv:File = ev.dataTransfer.items[0].getAsFile() as File;
            handleFile(csv);
        }
    }

    function handleDragOver(ev:DragEvent<HTMLDivElement>){
        ev.preventDefault();
        console.log('the file has been dragged');
    }

    function handleFileInput(ev:ChangeEvent<HTMLInputElement>){
        ev.preventDefault()
        if(ev.target.files && ev.target.files[0]){
            const csv:File = ev.target.files[0];
            handleFile(csv);
        }
    }

    const handleFile =(csv:File)=>{

        console.log(csv,'csv')

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
                        <input onChange={handleFileInput} id="fileSelect" type="file"  name="fileSelect" accept=".csv" />
                    </form>
                </div>
        </div> 
    )
}

export default DropZone;