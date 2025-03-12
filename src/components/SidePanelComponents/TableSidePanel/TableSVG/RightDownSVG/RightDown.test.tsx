import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import RightDown from './RightDown';

describe('these are the test for the rightdwon component', ()=>{
    it('renders without crashing', ()=>{
        render(<RightDown  {...{right:true}} />)
    })

    it('it renders the right arrow when supplied with right true', ()=>{
        render(<RightDown  {...{right:true}} />)
        
        const rightArrow = screen.getByTestId('right-arrow-id');

        expect(rightArrow).toBeInTheDocument();

    })

    it('it renders the down arrow when supplied with right false', ()=>{
        render(<RightDown  {...{right:false}} />)
        
        const downArrow = screen.getByTestId('down-arrow-id');

        expect(downArrow).toBeInTheDocument();

    })
})