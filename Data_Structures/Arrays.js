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

/*
Find Intersection
Have the function FindIntersection(strArr) read the array of strings stored in strArr which will contain 2 elements: 
the first element will represent a list of comma-separated numbers sorted in ascending order, 
the second element will represent a second list of comma-separated numbers (also sorted). 
Your goal is to return a comma-separated string containing the numbers that occur in elements of strArr in sorted order.
 If there is no intersection, return the string false.
*/

function FindIntersection(strArr) {
  let str1 = strArr[0].split(", ");
  let str2 = strArr[1].split(", ");
  let result = [];
  for (let i = 0; i < str1.length; i++) {
    let newStr1 = str1[i];

    for (let i = 0; i < str2.length; i++) {
      let newStr2 = str2[i];
      if (newStr2 === newStr1) {
        result.push(newStr1);
      }
    }
  }
  if (result.length === 0) {
    return false;
  } else {
    return result.join(",");
  }
}
console.log(FindIntersection(["1, 5, 6, 7, 10, 11, 12", "5, 6, 8, 11, 17"]));
console.log(FindIntersection(["1, 2, 4, 5, 6, 9", "2, 3, 4, 8, 10"]));
console.log(FindIntersection(["5, 6, 9, 11, 12, 16", "4, 6, 7, 11, 16"]));

/*
Equivalent Keypresses
Have the function EquivalentKeypresses(strArr) read the array of strings stored in strArr which will contain 2 strings representing two comma separated lists of keypresses. 
Your goal is to return the string true if the keypresses produce the same printable string and the string false if they do not.
 A keypress can be either a printable character or a backspace represented by -B. 
You can produce a printable string from such a string of keypresses by having backspaces erase one preceding character.
*/
function EquivalentKeypresses(strArr) {
  const checkKeyPressed = (str) => {
    let result = "";
    let stack = str.split(",");

    stack.forEach((item, idx) => {
      if (stack[idx + 1] !== "-B" && stack[idx] !== "-B") {
        result += item;
      }
    });
    return result;
  };
  return checkKeyPressed(strArr[0]) === checkKeyPressed(strArr[1]);
}
console.log(EquivalentKeypresses(["a,b,c,d", "a,b,c,d,-B,d"]));

/*
Have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern 
or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. 
An arithmetic sequence is one where the difference between each of the numbers is consistent, 
where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. 
Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 
0 will not be entered, and no array will contain all the same elements.

Use the Parameter Testing feature in the box below to test your code with different arguments.
*/

function ArithGeo(arr) {
  const isArithmetic = (num) => {
    let consistent = num[1] - num[0];
    for (let i = 0; i < num.length - 1; i++) {
      if (arr[i + 1] - arr[i] !== consistent) {
        return false;
      }
    }
    return true;
  };
  const isGeometric = (num) => {
    let constant = num[1] / num[0];
    for (let i = 0; i < num.length - 1; i++) {
      if (arr[i + 1] / arr[i] !== constant) {
        return false;
      }
    }
    return true;
  };
  if (isArithmetic(arr)) {
    return "Arithmetic";
  } else if (isGeometric(arr)) {
    return "Geometric";
  } else {
    return -1;
  }
}
console.log(ArithGeo([2, 4, 6, 8]));
console.log(ArithGeo([2, 6, 18, 54]));
