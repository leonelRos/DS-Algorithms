/*
In this Kata, you will sort elements in an array by decreasing frequency of elements.
If two elements have the same frequency, sort them by increasing value.

solve([2,3,5,3,7,9,5,3,7]) = [3,3,3,5,5,7,7,2,9]
*/
function solve(arr){
    // arr.sort()
    // let result = [];
    // let counter = {}
    // for(let i = 0; i < arr.length; i++){
    //   let frequent = arr[i]
    //   // let index = arr.indexOf(counter[frequent])
    //   counter[frequent] ? counter[frequent] += 1 : counter[frequent] = 1
    //   console.log(counter[frequent])
    //   console.log(counter)
    // }
    // for(let key in arr){
    //   result.push([key , arr[key]])
    // }
    // result.sort((a ,b) => {
    //   return b[1] - a[1]
    // })
    
    // return result
  
    let counter = {};
    let result = [];
  
    for(let item of arr) {
      counter[item] = counter[item] ? counter[item] + 1 : 1;
    }
    for(let item in counter) {
      result.push([item, counter[item]])
    }
    result = result
          .sort( (a, b) => {
            if(b[1] === a[1]) return a[0] - b[0]
            return b[1] - a[1]
          })
          .map( a => {
            let arr = [];
            let times = a[1];
            for(let i = 0; i < times; i++) {
              arr.push(Number(a[0]))
            }
            return arr
          })
    console.log([].concat(...arr))
    
    return [].concat(...result);
    
  }
  console.log(solve([2,3,5,3,7,9,5,3,7]))
