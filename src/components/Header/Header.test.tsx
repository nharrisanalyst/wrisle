import {render} from '@testing-library/react'

import Header from './';

describe('these are unit test for <Header/>', ()=>{
    it('renders without crashing', ()=>{
        render(<Header />)
    })
})