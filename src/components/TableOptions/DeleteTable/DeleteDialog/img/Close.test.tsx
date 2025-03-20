import {render} from '@testing-library/react'
import Close from './Close';

const props = {
    handleClose:()=>(console.log('test')),
  };


describe('test for <Close />', ()=>{
    test('it renders without crashing', ()=>{
        render(<Close  {...props} />);
    })
})