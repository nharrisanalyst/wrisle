import  { DragEvent, ChangeEvent, FC } from 'react';
import { usePapaParse } from 'react-papaparse';
import {nanoid} from 'nanoid';
import { TableState } from '../../types/TableData';
import useStore, {MyStoreInterface}  from '../../store/useStore';
import { parseCSVRow } from '../Table/utilis/parseCSV'

import './dropZone.scss';

const DropZone =() =>{
    const { readString } = usePapaParse();
    const { addTableData, tableData }= useStore();
    
    function handleDrop(ev:DragEvent<HTMLDivElement> ):void{
        ev.preventDefault()
        if(ev.dataTransfer.items && ev.dataTransfer.items[0]){
            const csv:File = ev.dataTransfer.items[0].getAsFile() as File;
            handleFile(csv);
        }
    }

    function handleDragOver(ev:DragEvent<HTMLDivElement>):void{
        ev.preventDefault();
    }

    function handleFileInput(ev:ChangeEvent<HTMLInputElement>):void{
        ev.preventDefault()
        if(ev.target.files && ev.target.files[0]){
            const csv:File = ev.target.files[0];
            handleFile(csv);
        }
    }

    const handleFile =(csv:File):void=>{
        const reader = new FileReader();
        reader.onload=(event:ProgressEvent<FileReader>)=>{
            const csvText:string = event?.target?.result as string;
            readString(csvText, {
                complete: (results:any) => {
                    updateTableDataState(results)   
                },
                header: true,
                skipEmptyLines: true
              });
        }
        reader.readAsText(csv);

    }

    const updateTableDataState =(data:any):void=>{
        const newTableData:TableState = {
            id:nanoid(),
            name:"untitled",
            data:{
                headers:data.meta.fields,
                rows:data.data
            },
            dateCreated: new Date() 
        }

        addTableData(newTableData);
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