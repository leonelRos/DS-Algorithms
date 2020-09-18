/*
The problem states that we’ll be getting an array as an input (e.g. [1,2,3,4,5]) along with an integer (d).
 Then, we need to shift each of the array’s elements unit to the left. For example, if 2 left rotations are performed on array [1,2,3,4,5] , 
 then the array would become [3,4,5,1,2].
*/

function rotLeft(a, d) {
  if (d > a.length) return a;
  let finalArr = [...a];
  for (let i = 0; i < d; i++) {
    let rotatedArr = finalArr.shift();
    finalArr.push(rotatedArr);
  }
  return finalArr;
}

console.log(rotLeft([1, 2, 3, 4, 5], 3));
