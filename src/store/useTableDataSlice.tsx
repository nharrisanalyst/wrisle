import {StateCreator} from 'zustand';
import {MyStoreInterface} from './useStore';
import { TableState } from '../types/TableData';


export interface TableDataStoreType {
    tableData:Array<TableState>;
    addTableData:(newTableData:TableState)=> void;
}

const useTableDataStore:StateCreator<MyStoreInterface> = ((set:any)=>({
    tableData:[],
    addTableData:(newTableData:TableState)=>{
        set((state:any)=>({tableData:[...state.tableData, newTableData]}))
    }
}))

export default useTableDataStore;