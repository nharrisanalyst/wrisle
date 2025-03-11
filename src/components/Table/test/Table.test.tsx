import {render} from '@testing-library/react';
import { TableState } from '../../../types/TableData';
import Table, { MyTableProps } from '../'

const tableData:TableState ={
     id:"abcdefg",
     name:'Untitled',
     data:{
        headers:["name", "age", "tall"],
        rows:[
            {
                "name":"me",
                "age":22,
                "tall":true
            },
            {
                "name":"you",
                "age":25,
                "tall":false
            },
            {
                "name":"other",
                "age":35,
                "tall":true
            }
        ]
     },
     dateCreated: new Date()
}

const props:MyTableProps ={ tableData:tableData} 

describe('these are the test for the <Table /> component', ()=>{
    test('it renders without crashing', ()=>{
        render(<Table {...props} />);
    })
})