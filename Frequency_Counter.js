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


/**
 * Word Count
 *
 * Given an body of text, return a hash table of the frequency of each word.
 *
 * Parameters
 * Input: text {String}
 * Output: {Hash Table}
 *
 * Constraints
 *
 * Capital and lower case versions of the same word should be counted is the same word.
 *
 * Remove punctuations from all words.
 *
 * Time: O(N)
 * Space: O(N)
 * Where N is the number of characters in the string.
 *
 * **Examples**
 * 'The cat and the hat.' --> '{ the: 2, cat: 1, and: 1, hat: 1 }'`
 * 'As soon as possible.' --> '{ as: 2, soon: 1, possible: 1 }'`
 * 'It's a man, it's a plane, it's superman!' --> '{ its: 3, a: 2, man: 1, plane: 1, superman: 1 }'`
 */

function wordCount(sentence) {
// YOUR WORK HERE
let newStr =  sentence.toLowerCase().replace(/[,.!]/g,'').split(' ')

let counter = {};
for(let i = 0; i < newStr.length; i++){
    let word = newStr[i]
    counter[word] ? counter[word] += 1 : counter[word] =1;
}
return counter
}
console.log(wordCount('the cat and the hat.'))
console.log(wordCount('As soon as possible.'))
console.log(wordCount('Its a man, its a plane, its superman!'))