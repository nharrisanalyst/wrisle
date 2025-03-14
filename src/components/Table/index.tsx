import { useMemo, useState } from 'react';
import {createColumnHelper,flexRender,getCoreRowModel,useReactTable, getPaginationRowModel} from '@tanstack/react-table';
import ControlTable from '../ControlTable'
import { TableState} from '../../types/TableData';

import './Table.scss';

export type MyTableProps ={
    tableData:TableState
}

type PaginationType ={
    pageIndex: number; //initial page index
    pageSize: number; //default page size
}

const Table =({tableData}:MyTableProps)=>{
    const [pagination, setPagination] = useState<PaginationType>({
        pageIndex:0,
        pageSize:100,
    })
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
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            //...
            pagination,
          },
      })
    const TablePagination = tableData.data.rows.length>=pagination.pageSize?(
        <ControlTable
        pageCount={pagination.pageIndex}
        rowCount={pagination.pageSize}
        firstPage={() => table.firstPage()}
        disabledFirstPage={!table.getCanPreviousPage()}
        lastPage={()=>table.lastPage()}
        disabledLastPage={!table.getCanNextPage()}
        previousPage={()=>table.previousPage()}
        previousPageDisabled={!table.getCanPreviousPage()}
        nextPage={()=>table.nextPage()}
        nextPageDisabled={!table.getCanNextPage()}   
        />
    ):null;
    return(
        <>
        <div className='table-title-stuff'>
            <span className='table-title' id={tableData.id}>{tableData.name}</span> 
            <span className='table-row-select'>
                {TablePagination}
            </span>
        </div>
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