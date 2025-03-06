import {render} from '@testing-library/react'
import App from './App';

jest.mock("nanoid", () => {   return { nanoid: () => "123" } });


describe('these are test for <App />', ()=>{
    it('renders with crashing', ()=>{
      render(<App/>)
    })
})