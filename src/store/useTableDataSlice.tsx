import { SetState } from "zustand";
import {MyStoreInterface} from './useStore';
import { TableState } from '../types/TableData';


export interface TableDataStoreType {
    data:Array<TableState>;
    addTableData:()=> void;
}

const useTableDataStore = ((set:SetState<MyStoreInterface>)=>({
    tableData:[],
    addTableData:(newTableData:TableState)=>{
        set((state:any)=>({tableData:[...state.tableData, newTableData]}))
    }
}))

export default useTableDataStore;