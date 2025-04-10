
export const truncateFile = (title:string):string =>{
    if( title.length <= 20 ) return title;
    let titleArr = title.split("");
    let fileType =[];
    const fileTruncArr =[]

    //get the file extension backwards
    let j = titleArr.length - 1;
    let k = 0
    while (k <12){
        fileType.push(titleArr[j]);
        j--;
        k++;
    }
    //reverse
    fileType = fileType.reverse();
    let i=0;
    //put the first 15 letters into the array
    while(i<12){
     fileTruncArr.push(titleArr[i]);
     i++
    }
    //add three dots 
    fileTruncArr.push(".")
    fileTruncArr.push(".")
    fileTruncArr.push(".")

    //add file extension
    fileType.forEach((c)=>{
        fileTruncArr.push(c);
    })

    return fileTruncArr.join("");

}