/*
 * Utilize the frequency count pattern to solve these problems.  Use a Hash Set
 * or an Array instead of a Hash Table where applicable.
 *
 * Unique
 *
 * Given an array of integers, return an array with all duplicates removed.*
 *
 * Parameters
 * Input: arr {Array of Integers}
 * Output: {Array of Integers}
 *
 * Constraints
 *
 * Time: O(N)
 * Space: O(N)
 *
 * Examples
 * [1, 2, 4, 4, 5, 6] --> [1, 2, 4, 5, 6]
 * [1, 1, 2, 2, 3, 3]' --> [1, 2, 3]
 * [1, 2, 3, 1, 2] --> [1, 2, 3]
 */

function unique(arr) {
    let newArr = [];
    let counter= {}
  for(let i = 0; i < arr.length; i++){
    let num = arr[i]
    counter[num] ? counter[num] += 1 : counter[num] = 1
   console.log(counter)
  }
  for (let key in counter){
    newArr.push(parseInt(key))
  }
  return newArr
  
  }
  
  console.log(unique([1, 2, 4, 4, 5, 6]))