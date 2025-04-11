import {StateCreator} from 'zustand';
import {MyStoreInterface} from './useStore';
import { TableState } from '../types/TableData';
import DeleteTable from '../components/TableOptions/DeleteTable/index';


export interface TableDataStoreType {
    tableData:Array<TableState>;
    addTableData:(newTableData:TableState)=> void;
    deleteTable:(tableID:string)=>void;
}

const useTableDataStore:StateCreator<TableDataStoreType> = ((set:any)=>({
    tableData:[],
    addTableData:(newTableData:TableState)=>{
        set((state:any)=>({tableData:[...state.tableData, newTableData]}))
    },
    deleteTable:(tableID:string)=>{
        set((state:any)=>({tableData:[...state.tableData.filter((table:TableState)=>table.id !== tableID)]}))
    }
}))

export default useTableDataStore;