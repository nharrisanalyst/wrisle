import {render, screen} from '@testing-library/react'
import SideBar from './';


describe('test for <SideBar/>', ()=>{
    test('it renders without crashging', ()=>{
        render(<SideBar />);
    })

    test('<SideBar /> has the company name', ()=>{
        render(<SideBar />);
        expect(screen.getByText('WRISLE'))
    })
})