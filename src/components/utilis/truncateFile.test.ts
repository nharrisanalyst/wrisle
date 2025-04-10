import { truncateFile } from 'truncateFile';

describe('these are files for the truncateFile()',()=>{
    it('returns the same string if the file is ten characthers or less', ()=>{
        const fileString  ='this_file.csv';
        const gets = truncateFile(fileString);
        expect(gets).toEqual(fileString);

    })
})