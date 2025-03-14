import {render} from '@testing-library/react';

import ControlTable from './';

const controlTableProps={
    pageCount:0,
    rowCount:25,
    firstPage:()=>{},
    disabledFirstPage:false,
    lastPage:()=>{},
    disabledLastPage:false,
    previousPage:()=>{},
    previousPageDisabled:false,
    nextPage:()=>{},
    nextPageDisabled:false,

}

describe("these are test for the <ControlTable />", ()=>{
    it("renders without crashing", ()=>{
        render(<ControlTable {...controlTableProps} />);
    })
})