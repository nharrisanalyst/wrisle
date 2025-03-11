import { formatData, parseCSVRow } from './parseCSV';

describe('formatData() takes a string and returns a dataType of string|number|boolean', ()=>{
    test("takes a string and returns the same string", ()=>{
        const testString = "testString";
        const formattedData = formatData(testString);
        expect(formattedData).toEqual("testString");
    })

    test("it takes a string number and formats it as a number",()=>{
        const testNumberString = "10";
        const testNumberString_2 = "0.10";
        const formattedData = formatData(testNumberString);
        const formattedData_2 = formatData(testNumberString_2);
        expect(formattedData).toStrictEqual(10);
        expect(formattedData_2).toStrictEqual(0.10);
    })

    test('if the sgring is true or false it returns true or false', ()=>{
        const testBoolString = "false";
        const testBoolString_2 = "true";
        const testBoolyesString = "Yes";
        const testBoolnoString_2 = "No";
        const formattedData = formatData(testBoolString);
        const formattedData_2 = formatData(testBoolString_2);
        const formattedDatta_3 = formatData(testBoolyesString);
        const formattedData_4 = formatData(testBoolnoString_2);
        expect(formattedData).toStrictEqual(false);
        expect(formattedData_2).toStrictEqual(true);
        expect(formattedDatta_3).toStrictEqual(true);
        expect(formattedData_4).toStrictEqual(false);
    })
})


describe("parseCSVRow() takes an  Array object Record<string,string> and returns object Record<string, string|number|boolean> formatted correctly", ()=>{
    test("formatted correctly", ()=>{
        const testRow =[
            {
                id:'cji',
                money:"2432",
                color:"orange",
                onTime:"true"
            },
            {
                id:'cxi',
                money:"5698",
                color:"Red",
                onTime:"no"
            }
        ]

        const formattedData =[
            {
                id:'cji',
                money:2432,
                color:"orange",
                onTime:true
            },
            {
                id:'cxi',
                money:5698,
                color:"Red",
                onTime:false
            }
        ]

        const formattedRow = parseCSVRow(testRow);
        expect(formattedRow).toEqual(formattedData)
    })
})