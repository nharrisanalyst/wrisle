import {render} from '@testing-library/react'
import DeleteDialog from './';

const props = {
    text: 'Confirm Deletion of Table',
    onDelete: ()=> {console.log('deleted')},
    onClose:()=> {console.log('closed')},
    isOpen: true,
    actionButtonText:'Delete',
    actionText:'Warning Press Delete to Delete the Table'
  };


describe('test for <DeleteDialog/>', ()=>{
    test('it renders without crashging', ()=>{
        render(<DeleteDialog {...props} />);
    })
})