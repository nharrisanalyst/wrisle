import {render, screen} from '@testing-library/react'

import Header from './';

describe('these are unit test for <Header/>', ()=>{
    it('renders without crashing', ()=>{
        render(<Header />)
    })

    it('displays tagline', ()=>{
        render(<Header />);
        expect(screen.getByText('Perception in Data'))
    })
})