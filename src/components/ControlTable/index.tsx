import {MouseEvent} from 'react'
import './controlTable.scss';

type ControlTableProps={
    pageCount:number;
    rowCount:number;
    firstPage:(ev:MouseEvent<HTMLButtonElement>)=>void;
    disabledFirstPage:boolean;
    lastPage:(ev:MouseEvent<HTMLButtonElement>)=>void;
    disabledLastPage:boolean;
    previousPage:(ev:MouseEvent<HTMLButtonElement>)=>void;
    previousPageDisabled:boolean;
    nextPage:(ev:MouseEvent<HTMLButtonElement>)=>void;
    nextPageDisabled:boolean;

}

const ControlTable =({pageCount, 
                     rowCount, 
                     firstPage,
                     disabledFirstPage, 
                     lastPage, 
                     disabledLastPage,
                     previousPage,
                     previousPageDisabled,
                     nextPage,
                     nextPageDisabled
                  }:ControlTableProps)=>{
   return (
    <div className='row-selector-main'>
       <button disabled={disabledFirstPage} onClick={firstPage}>{"<<"}</button>
       <button disabled={previousPageDisabled}  onClick={previousPage}>{"<"}</button>
       {` rows ${pageCount*rowCount}-${pageCount*rowCount+rowCount} `}
       <button disabled={nextPageDisabled} onClick={nextPage}>{">"}</button>
       <button disabled={disabledLastPage} onClick={lastPage}>{">>"}</button>
    </div>
   )
}

export default ControlTable;