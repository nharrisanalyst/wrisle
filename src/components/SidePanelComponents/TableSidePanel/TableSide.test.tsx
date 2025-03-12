import '@testing-library/jest-dom';
import {render, screen, fireEvent} from '@testing-library/react';
import TableSide from './';

describe('these are test for the <TableSide /> component', ()=>{
    it('renders without crashing', ()=>{
       render(<TableSide {...{listItems:[]}} />)
    })

    it('correctly renders with arrow to the right and than when clicked on it opens and shows downward',()=>{
        render(<TableSide {...{listItems:[]}} />)
        const arrowRight = screen.getByTestId('right-arrow-id');
        expect(arrowRight).toBeInTheDocument();
        const button =  screen.getByRole('button');
        fireEvent.click(button);
        const arrowDown = screen.getByTestId('down-arrow-id');
        expect(arrowDown).toBeInTheDocument();

    })
})