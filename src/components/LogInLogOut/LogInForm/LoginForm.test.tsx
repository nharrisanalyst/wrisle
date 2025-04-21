import LoginForm from './';
import { render } from '@testing-library/react' 
describe('these are test for the login form', ()=>{
    it('renders without crashing', ()=>{
        render(<LoginForm />)
    })
})