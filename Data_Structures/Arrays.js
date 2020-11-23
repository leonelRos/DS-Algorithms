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

/*
It’s New Year’s Day and everyone’s in line for the Wonderland rollercoaster ride! 
There are a number of people queued up, and each person wears a sticker indicating their initial position in the queue. 
Initial positions increment by 1 from 1 at the front of the line to N at the back.
Any person in the queue can bribe the person directly in front of them to swap positions. 
If two people swap positions, they still wear the same sticker denoting their original places in line. 
One person can bribe at most two others. For example, if n = 8 and Person 5 bribes Person 4, the queue will look like this: 1, 2, 3, 5, 4, 6, 7, 8.
Fascinated by this chaotic queue, you decide you must know the minimum number of bribes that took place to get the queue into its current state!
*/

function minimumBribes(q) {
  let bribeCounter = 0;
  let text = "Too chaotic";
  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] !== i + 1) {
      if (i - 1 >= 0 && q[i - 1] === i + 1) {
        bribeCounter++;
        swapPositions(q, i, i - 1);
      } else if (i - 2 >= 0 && q[i - 2] === i + 1) {
        bribeCounter += 2;
        swapPositions(q, i - 2, i - 1);
        swapPositions(q, i - 1, i);
      } else {
        return text;
      }
    }
  }
  return bribeCounter;
}

//swap method
function swapPositions(q, a, b) {
  let curr = q[a];
  q[a] = q[b];
  q[b] = curr;
}

console.log(minimumBribes([2, 1, 5, 3, 4])); //3
console.log(minimumBribes([2, 5, 1, 3, 4])); //too chaotic
console.log(minimumBribes([3, 1, 4, 5, 6, 7, 2])); //6
