
const chunkArray= (arr,len) => {
     
    // init chunked arr
    const chunkedArray= [];

    // loop through array

    arr.forEach( val => {
        // get last element

        const last = chunkedArray[chunkedArray.length - 1];

        // check if last and if last and if  last length is equal to the  len

        if(!last || last.length === len) {
            
            chunkedArray.push([val]);
        } else {
            last.push(val);
        }
    })

    return chunkedArray;
}
module.exports=chunkArray;


