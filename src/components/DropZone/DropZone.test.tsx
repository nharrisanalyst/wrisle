import {render} from '@testing-library/react';
import DropZone from './';

jest.mock("nanoid", () => {   return { nanoid: () => "123" } });

describe('these are test for <DropZone />', ()=>{
    it('renders without crashing', ()=>{
        render(<DropZone />);
    })
})