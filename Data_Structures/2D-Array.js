/*
Given a 6 x 6 2D Array, arr:

1 1 1 0 0 0
0 1 0 0 0 0
1 1 1 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
0 0 0 0 0 0
We define an hourglass in A to be a subset of values with indices falling in this pattern in arr's 
graphical representation:

a b c
  d
e f g
There are 16 hourglasses in arr, and an hourglass sum is the sum of an hourglass' values. 
Calculate the hourglass sum for every hourglass in arr, then print the maximum hourglass sum.

For example, given the 2D array:

-9 -9 -9  1 1 1 
 0 -9  0  4 3 2
-9 -9 -9  1 2 3
 0  0  8  6 6 0
 0  0  0 -2 0 0
 0  0  1  2 4 0
We calculate the following 16 hourglass values:

-63, -34, -9, 12, 
-10, 0, 28, 23, 
-27, -11, -2, 10, 
9, 17, 25, 18
Our highest hourglass value is 28 from the hourglass:

0 4 3
  1         = 28
8 6 6

PSEUDOCODE:
    -Declare of Sum of each hourglass variable
    -return Sum of each hourglass
    -Loop through the row with a min = 0 adn max =4
    -Loop through the col with a min = 0 adn max =4
    -Declare our total path for the hourglass [0,0][0,1][0,2][1,1][2,0][2,1][2,2]
    -if total path is greater than sum of hourglass; sum hourglasses = total path

CONSTRAINTS: 

 -9 =< ARR[i][j] =< -9
 0 =< i,j =<5
*/

function hourglassSum(arr) {
    let sum = -63 //given the constraints the minimun elements inside the hourglass are 7// -9 *7 = -63
     for(let row = 0; row < 4; row++){
       for(let col = 0; col< 4; col++){
         let hourGlassSum = 
           arr[row][col] +
           arr[row][col + 1] +
           arr[row][col + 2] +
           arr[row + 1][col + 1] +
           arr[row + 2][col] +
           arr[row + 2][col + 1] +
           arr[row + 2][col+2] 
       if(hourGlassSum > sum){
         sum = hourGlassSum
       }
       }
     }
     return sum
}
console.log(hourglassSum([
    [-9, -9, -9,  1, 1, 1], 
    [ 0, -9,  0,  4, 3, 2],
    [-9, -9, -9,  1, 2, 3],
    [0,  0,  8,  6, 6, 0],
    [ 0,  0,  0, -2, 0, 0],
    [0,  0,  1,  2, 4, 0]]))