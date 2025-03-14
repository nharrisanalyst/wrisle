import Table from './';
import { TableState } from '../../types/TableData'
import useStore  from '../../store/useStore';

import './tableList.scss';


const TableList = () =>{
    const { tableData } = useStore();
   return(
        <>    
        {
            tableData.map(
                (d:TableState) =>(<Table key={d.id} {...{tableData:d}} />)
            )
        }
        </>
   )
};



export default TableList;