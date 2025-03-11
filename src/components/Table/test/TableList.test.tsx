import {render} from '@testing-library/react';
import TableList from '../TableList';

describe("these are test for the <TableList /> component", ()=>{
    it('Renderes without crashing', ()=>{
        render(<TableList/>)
    })
})