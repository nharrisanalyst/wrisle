import { useMemo } from 'react'
import useStore  from '../../../store/useStore';
import { TableState } from '../../../types/TableData';
import TableSide, {TableSideProps, ListItem} from './';

const deriveTableList=(tableData:Array<TableState>):Array<ListItem> =>{
    
    return tableData.map(td=>({name:td.name, id:td.id}))
}

const TableSideGlobal =()=>{
    const { tableData }  = useStore();
    const tableList = useMemo( ()=>deriveTableList(tableData), [tableData]);

    return (
        <>
        <TableSide {...{listItems:tableList}} />
        </>
    )
}

export default TableSideGlobal;