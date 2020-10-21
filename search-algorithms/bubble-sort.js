/*
No the most efficient way to solve problems. grabs two pais and compared them and move the left side to the right side if it is greater than tha right side
time complexity : O(n^2)
*/


function bubbleSort(arr){
    let temp; //is the current elemetn in the array ready to be compared
    let noSwaps; // is the method we call once the loop places the last greater element at the end of array
    for(let i = arr.length; i > 0; i--){ //looping in a reverse order
      noSwaps = true
      for(let j = 0; j < i - 1; j++) { // J is the element before I
        // console.log(arr[j])
        if(arr[j] > arr[j+1]){
          temp = arr[j]
          arr[j] = arr[j +1]
          arr[j+1] = temp
          noSwaps = false
        } 
      }
      if (noSwaps) break; // breaks the loop in the array once the lements have been placed
    }
      return arr;
    }
    
    console.log(bubbleSort([37,45,29,8]))
