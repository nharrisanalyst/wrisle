import { useMemo } from 'react';
import {createColumnHelper,flexRender,getCoreRowModel,useReactTable} from '@tanstack/react-table'
import { TableState} from '../../types/TableData';

export type MyTableProps ={
    tableData:TableState
}

const Table =({tableData}:MyTableProps)=>{
    const TableType = useMemo(()=> typeof tableData.data.rows[0] ,[tableData.data.rows])

    return(
        <table>
        
        </table>
    )
}


export default Table;