/*
ALERT: BINARY SEARCH IS ONLY APPLICABLE TO SORTED ARRAYS!!!
The Job: basically takes in an array and cretaes three separate pointers,
left middle and right. the middle pointer decides whter the number given is greater or less than the middle,
so the search start depeding on the number given.

    let arr = [1,2,3,4,5,6,7,8,9]
               L       M       R
*/

function binarySearch(arr,n){
    let left = 0;
    let right = arr.length - 1;
    // to create middle pointer take the average of both left and right pointers in indexes
    let middle = Math.floor((left + right) / 2) 
    // while the number is not equal to middle number in the array and the left pointer is less than the right pointer for edge cases and no let the loop go out of bounds.
    while(arr[middle] !== n && left <= right){
        //if number is less than middle number move the right index to the middle number - 1
      if(n < arr[middle]) return right = middle - 1; 
      else left = middle + 1; // do the opposite of above
      middle = Math.floor((left + right) / 2) // create a new middle pointer
    }
    return arr[middle] === n ? middle : -1; // return middle index or -1 if not exist
  }
  
  console.log(binarySearch([1,2,3,4,5,6], 4))