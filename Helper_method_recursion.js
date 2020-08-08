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
  
/* 
resolve Fibonacci using recursion
*/
function resFibonacci(n) {
  var fibArr;
  function fiboHelper(i) {
      if (i < 2) {
          //i = 0
          //i = 1
          return i;
      } else {
          return fiboHelper(i - 2) + fiboHelper(i - 1);
      }
  }
  fibArr = fiboHelper(n)
  return fibArr;
}
console.log(resFibonacci(7))

/*
find the Factorial

4! = 1*2*3*4 = 24
5! = 1*2*3*4*5 = 120
*/
function factorialFind(n){
  var result= 1
  function getFactorial(limit){
    if(limit > n){
      return;
    }
      result *= limit
      console.log(limit)
    getFactorial(limit+1)
      // console.log(limit)
  }
  getFactorial(1)
  return result;
}
console.log(factorialFind(3));
console.log(factorialFind(5));


/*
 * 2d. Given an array of integers, create an array of two-item arrays
 *
 * Input:   arr {Array}
 * Output:  {Array}
 *
 * Example: arrayPairs([1, 2, 3, 4, 5, 6])  =>    [[1,2], [3,4], [5,6]]
 * Example: arrayPairs([1, 2, 3, 4, 5])     =>    [[1,2], [3,4], [5, undefined]]
 */
function arrayPairs(arr) {
  // YOUR WORK HERE
  let result = [];
  function pairArr(i){
    if(i >= arr.length ) return;
   result.push([arr[i], arr[i+1]])
pairArr( i+2)
  }
  pairArr(0)
  return result
}
console.log(arrayPairs([1,2,3,4,5,6]))