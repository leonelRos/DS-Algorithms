/*
Adding linear search algo, is job is to find the lement in the array one by one from left to right(not necessarily)
Best time complexity: O(1)
Worst time complexity: O(n)
*/

function linearSearch(arr, n){
  // for(let i = 0; i < arr.length; i++){
//       if(arr[i] === n){
//           return i
//       } 
// }
// return -1
  let result = arr.indexOf(n)
  return result
}
console.log(linearSearch([10,15,20,25,30], 30))