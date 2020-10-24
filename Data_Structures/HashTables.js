/*
hash table (hash map) is a data structure that implements an associative array abstract data type, a structure that can map keys to values. 
A hash table uses a hash function to compute an index, also called a hash code, into an array of buckets or slots, from which the desired value can be found. 
During lookup, the key is hashed and the resulting hash indicates where the corresponding value is stored.
Ideally, the hash function will assign each key to a unique bucket, but most hash table designs employ an imperfect hash function, 
which might cause hash collisions where the hash function generates the same index for more than one key. Such collisions are typically accommodated in some way.
In a well-dimensioned hash table, the average cost (number of instructions) for each lookup is independent of the number of elements stored in the table. 
Many hash table designs also allow arbitrary insertions and deletions of key-value pairs, at (amortized[2]) constant average cost per operation.[3][4]
In many situations, hash tables turn out to be on average more efficient than search trees or any other table lookup structure. For this reason, 
they are widely used in many kinds of computer software, particularly for associative arrays, database indexing, caches, and sets.
*/

class HashTable {
  //creating our DS HashTable
  constructor(size = 53) {
    //give our array hashtable a size of 53
    this.keyMap = new Array(size); //create our neww array
  }
  //hash function
  hash(key) {
    let total = 0;
    let PRIME_NUM = 31; //the reason why we are using prime numbers is because it limits the amount of collisions in our array and gives a better distribution of buckets or values.
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      //setting it up to 100 gives a better and faster load. You can set it up to any number.
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME_NUM + value) % this.keyMap.length;
    }
    return total;
  }
  //setting up our hashmap and adding key value pairs with separate chaining(we nested our data for multple input in the same bucket)
  set(key, value) {
    let index = this.hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = []; //[ , , ,[[ , ], [ , ]] , , ,]
    }
    this.keyMap[index].push([key, value]);
  }

  //we want to retrive the key from the hashs table. or check if each pair has a unique key
  get(key) {
    let index = this.hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  //retreiving the key of each bucket in our hashmap
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      //loop through out entire hashmap
      if (this.keyMap[i]) {
        //check if exist  and check for subarrays
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //loop through subarrays
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            //make sure there are not duplicates of keys in oour hashmap
            keysArr.push(this.keyMap[i][j][0]); //push to our initialized arary because we want to keep in insisde of DS
          }
        }
      }
    }
    return keysArr;
  }

  //retreiving values of our bucket
  values() {
    let valArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      //loop through out entire hashmap
      if (this.keyMap[i]) {
        //check if exist  and check for subarrays
        for (let j = 0; j < this.keyMap[i].length; j++) {
          //loop through subarrays
          if (!valArr.includes(this.keyMap[i][j][1])) {
            //make sure there are not duplicates of values in our hashmap if so, return once
            valArr.push(this.keyMap[i][j][1]); //push to our initialized arary because we want to keep in insisde of DS
          }
        }
      }
    }
    return valArr;
  }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000");
ht.set("yellow", "#FFFF00");
ht.set("olive", "#808000");
ht.set("salmon", "#FA8072");
ht.set("lightcoral", "#F08080");
ht.set("mediumvioletred", "#C71585");
ht.set("plum", "#DDA0DD");
ht.set("purple", "#DDA0DD");
ht.set("violet", "#DDA0DD");

/*
Given two strings, determine if they share a common substring. A substring may be as small as one character.
For example, the words "a", "and", "art" share the common substring . The words "be" and "cat" do not share a substring.
Function Description
Complete the function twoStrings in the editor below. It should return a string, either YES or NO based on whether the strings share a common substring.
twoStrings has the following parameter(s):
s1, s2: two strings to analyze .
Input Format:

"hello"
"world"
"hi"
"world"
*/
function twoStrings(s1, s2) {
  let letterCounter = {};
  for (let i = 0; i < s1.length; i++) {
    let letter_1 = s1[i];
    letterCounter[letter_1] = (letterCounter[letter_1] || 0) + 1;
    console.log(letterCounter);
  }
  for (let i = 0; i < s2.length; i++) {
    let letter2 = s2[i];
    if (letterCounter[letter2]) {
      return "YES";
    }
  }
  return "NO";
}
console.log(twoStrings("helloo", "yellow")); //yes
console.log(twoStrings("hi", "world")); //NO

/*
You are playing the Bulls and Cows game with your friend.
You write down a secret number and ask your friend to guess what the number is.
 When your friend makes a guess, you provide a hint with the following info:
The number of "bulls", which are digits in the guess that are in the correct position.
The number of "cows", which are digits in the guess that are in your secret number but are located in the wrong position.
 Specifically, the non-bull digits in the guess that could be rearranged such that they become bulls.
Given the secret number secret and your friend's guess guess, return the hint for your friend's guess.
The hint should be formatted as "xAyB", where x is the number of bulls and y is the number of cows. Note that both secret and guess may contain duplicate digits.

Example 1:

Input: secret = "1807", guess = "7810"
Output: "1A3B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1807"
  |
"7810"
Example 2:

Input: secret = "1123", guess = "0111"
Output: "1A1B"
Explanation: Bulls are connected with a '|' and cows are underlined:
"1123"        "1123"
  |      or     |
"0111"        "0111"
Note that only one of the two unmatched 1s is counted as a cow since the non-bull digits can only be rearranged to allow one 1 to be a bull.
*/

var getHint = function (secret, guess) {
  let bulls = 0;
  let cows = 0;
  let counter = new Array(10).fill(0);
  for (let i = 0; i < secret.length; i++) {
    let s = secret.charAt(i);
    let g = guess.charAt(i);
    console.log(s);
    console.log(g);

    if (s == g) {
      bulls++;
    } else {
      if (counter[s] < 0) cows++;
      if (counter[g] > 0) cows++;
      counter[s]++;
      counter[g]--;
    }
  }
  //  return bulls + "A" + cows + "B"
  return `${bulls}A${cows}B`;
};

/*
Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
*/

var lengthOfLongestSubstring = function (str) {
  var res = 0;
  var tem = [];
  for (var char of str) {
    var idx = tem.indexOf(char);
    if (idx > -1) {
      tem = tem.slice(idx + 1);
    }
    tem.push(char);
    if (tem.length > res) {
      res = tem.length;
    }
  }
  return res;
};

/*
Given an array of integers nums.
A pair (i,j) is called good if nums[i] == nums[j] and i < j.
Return the number of good pairs.

Example 1:

Input: nums = [1,2,3,1,1,3]
Output: 4
Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.
Example 2:

Input: nums = [1,1,1,1]
Output: 6
Explanation: Each pair in the array are good.
*/

var numIdenticalPairs = function (nums) {
  let count = 0;
  let hash = new Array(101).fill(0);
  for (let num of nums) {
    count = count + hash[num]++; //the count increases when element in the num has repetitve elements
  }
  return count;
};
