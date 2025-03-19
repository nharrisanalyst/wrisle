import {render} from '@testing-library/react'
import DeleteDialog from './';

const props = {
    deleteText: 'Confirm Deletion of Table',
    onDelete: ()=> {console.log('deleted')},
    onClose:()=> {console.log('closed')},
    isOpen: true,
    actionButtonText:'Delete',
    actionText:'Warning Press Delete to Delete the Table',
    deleteNoun:'tabel_this_name.csv',
  };


describe('test for <DeleteDialog/>', ()=>{
    test('it renders without crashging', ()=>{
        render(<DeleteDialog {...props} />);
    })
})