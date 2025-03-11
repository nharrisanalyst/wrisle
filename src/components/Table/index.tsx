import { useMemo, useState } from 'react';
import {createColumnHelper,flexRender,getCoreRowModel,useReactTable} from '@tanstack/react-table'
import { TableState} from '../../types/TableData';

import './Table.scss';

export type MyTableProps ={
    tableData:TableState
}



const Table =({tableData}:MyTableProps)=>{
    const  FristRow = useMemo(()=> typeof tableData.data.rows[0] ,[tableData.data.rows])
    const columnHelper = useMemo (()=> createColumnHelper<typeof FristRow>() , [FristRow])
    const columns = useMemo (()=> tableData.data.headers.map((c) =>(columnHelper.accessor(
                //as our table is dynamically typed becuase we are getting the data from user input
                // @ts-ignore:
                c,{
                    cell:info => info.getValue().toString(),
                })))  ,[tableData.data.headers, columnHelper]);
    
    const [data, setData] = useState(() => [...tableData.data.rows]);
    const table = useReactTable({
        data,
        //as our table is dynamically typed becuase we are getting the data from user input
        // @ts-ignore:
        columns,
        getCoreRowModel: getCoreRowModel(),
      })

    return(
        <>
        <span className='table-title'>{tableData.name}</span>
        <div className='main-table'>
            <table>
                <thead className="table-header" >
                    {table.getHeaderGroups().map(hG=>(
                        <tr key={hG.id}>
                        {hG.headers.map(header=>(
                            <th  key={header.id}>
                            {header.isPlaceholder
                              ? null
                               :flexRender(
                                header.column.columnDef.header,
                                header.getContext())}
                            </th>   
                        ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                {table.getRowModel().rows.map(row => (
                    <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </>
    )
}


export default Table;