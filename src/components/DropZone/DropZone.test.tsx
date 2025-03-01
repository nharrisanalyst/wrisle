import {render} from '@testing-library/react';
import DropZone from './';


describe('these are test for <DropZone />', ()=>{
    it('renders without crashing', ()=>{
        render(<DropZone />);
    })
})