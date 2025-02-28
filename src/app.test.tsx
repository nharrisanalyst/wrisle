import {render} from '@testing-library/react'
import App from './App';


describe('these are test for <App />', ()=>{
    it('renders with crashing', ()=>{
      render(<App/>)
    })
})