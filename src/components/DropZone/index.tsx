import { DragEvent, ChangeEvent } from 'react';
import { usePapaParse } from 'react-papaparse';
import { nanoid } from 'nanoid'; 
import { TableState } from '../../types/TableData';
import useStore  from '../../store/useStore';

import './dropZone.scss';

const DropZone =()=>{
    const { readString } = usePapaParse();
    
    function handleDrop(ev:DragEvent<HTMLDivElement> ){
        ev.preventDefault()
        if(ev.dataTransfer.items && ev.dataTransfer.items[0]){
            const csv:File = ev.dataTransfer.items[0].getAsFile() as File;
            handleFile(csv);
        }
    }

    function handleDragOver(ev:DragEvent<HTMLDivElement>){
        ev.preventDefault();
    }

    function handleFileInput(ev:ChangeEvent<HTMLInputElement>){
        ev.preventDefault()
        if(ev.target.files && ev.target.files[0]){
            const csv:File = ev.target.files[0];
            handleFile(csv);
        }
    }

    const handleFile =(csv:File)=>{
        const reader = new FileReader();
        reader.onload=(event:ProgressEvent<FileReader>)=>{
            const csvText:string = event?.target?.result as string;
            readString(csvText, {
                complete: (results:any) => {
                    console.log(results);
                    //updateTableDataState(results)
                },
                header: true,
                skipEmptyLines: true
              });
        }
        reader.readAsText(csv);

    }

    const updateTableDataState =(data:any)=>{
        const newTableData:TableState = {
            id:nanoid(),
            name:"untitled",
            data:{
                headers:data.meta.fields,
                rows:data.data
            },
            dateCreated: new Date() 
        }

        useStore.addTableData(newTableData);

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