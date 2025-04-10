import { truncateFile } from './truncateFile';

describe('these are files for the truncateFile()',()=>{
    it('returns the same string if the file is 20 characthers or less', ()=>{
        const fileString  ='this_file.csv';
        const gets = truncateFile(fileString);
        expect(gets).toEqual(fileString);

    })

    it('if the file is longer than 20 it returns a truncated file  ex: first_few...csv', ()=>{
        const fileString = 'this_is_a_really_long_file_name_and_it_should_be_truncated.csv';
        const gets = truncateFile(fileString);
        const wants = 'this_is_a_re...runcated.csv';
        expect(gets).toEqual(wants);
    })
})