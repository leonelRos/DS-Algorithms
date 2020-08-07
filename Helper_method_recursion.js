/*
 * 2a. Print each item in an array in order
 *
 * Input:   arr {Array}
 * Output:  {undefined}
 *
 * Example: printArray([1,2,3]) =>
 *          1
 *          2
 *          3
 */
function printArray(arr){
    // YOUR WORK HERE
    function orderArr(i){
    if(i === arr.length) return ;
    console.log(arr[i])
    orderArr(i + 1)
    // console.log(i)
    }
    orderArr(0);
    
  }