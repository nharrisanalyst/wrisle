type DataType = string|number|boolean

export const formatData = (d:string):DataType =>{
    if(!Number.isNaN(Number(d))){
     return Number(d);
    }else if(d==="Yes" || d==="True" ||d==="yes" || d==="true"){
     return true 
    }else if(d==="No" || d==="False" ||d==="no" || d==="false"){
     return false 
    }
    return d;
 }


export const parseCSVRow=(data:Array<Record<string,string>>):Array<object>=>{
    if(data.length > 0 && typeof data[0] === "object"){
      const newDataRow:Array<object> =[];
        
      data.forEach((d:Record<string,string>)=>{
            const newData:Record<string,DataType>  ={};
            Object.keys(d).forEach((key:string)=>{
                newData[key] = formatData(d[key])
            })
            newDataRow.push(newData);
      })
      return newDataRow;
    }
    return data;
}


