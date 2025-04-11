import PreviewWarning from './';
import {render} from '@testing-library/react'

describe(" text for <PreviewWarning/> ", ()=>{
    it('renders without crashing', ()=>{
        render(<PreviewWarning />)
    })
})