
function chunkarray(array, chunksize) {
  let chunks =[];
  for (let i=0; i < array.length; i += chunksize)
   
    
    {
    let chunk = array.slice(i, i + chunksize);

    chunks.push(chunk);
  }
  return chunks;
}
let result1 = chunkarray([1,2,3,4,5,6,7,8,9],2)
console.log(result1)
let result2 = chunkarray([1,2,3,4,5,6,7,8,9],3)
console.log(result2);


