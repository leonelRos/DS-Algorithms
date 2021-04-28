/*
Given a string containing characters A and B only, he wants to change it into a string he likes. To do this, he is allowed to delete the characters in the string.
Your task is to find the minimum number of required deletions.
Input Format
The first line contains an integer T, i.e. the number of test cases.
The next T lines contain a string each.
Output Format
For each test case, print the minimum number of deletions required.
Constraints
1≤T≤10
1≤ length of string ≤105

AAAA ⟹ A, 3 deletions
BBBBB ⟹ B, 4 deletions
ABABABAB ⟹ ABABABAB, 0 deletions
BABABA ⟹ BABABA, 0 deletions
AAABBB ⟹ AB, 4 deletions

Check ipad for pseudocode
*/

function alternatingCharacters(s) {
  let deletions = 0;
  for (let i = 0; i < s.length; i++) {
    let left = s[i];

    let right = s[i + 1];
    if (left === right) {
      deletions += 1;
      right++;
    } else {
      left = right;
      right++;
    }
  }
}
// console.log(alternatingCharacters("AQBA"));

/**
 * ''' Have the function HTMLElements(str) read the str parameter being passed which will be a string of HTML DOM elements and plain text. 
The elements that will be used are: b, i, em, div, p. For example: if str is "<div><b><p>hello world</p></b></div>" then this string of 
DOM elements is nested correctly so your program should return the string true.
If a string is not nested correctly, return the first element encountered where, if changed into a different element, would result in a 
properly formatted string. If the string is not formatted properly, then it will only be one element that needs to be changed. For example: 
if str is "<div><i>hello</i>world</b>" then your program should return the string div because if the first <div> element were changed into
a <b>, the string would be properly formatted.

Examples
Input: "<div><div><b></b></div></p>"
Output: div
Input: "<div>abc</div><p><em><i>test test test</b></em></p>" '''
 */

function HTMLElements(str) {
  const stack = [];
  const tags = str.match(/<\/?\w+>/g);
  console.log(tags);
  const closeTagPattern = /\//;

  for (let i = 0; i < tags.length; i++) {
    console.log(tags[i]);
    if (!closeTagPattern.test(tags[i])) {
      stack.push(tags[i].replace(/[<>]/g, ""));
    } else {
      const closeTagType = tags[i].replace(/[\/<>]/g, "");
      if (closeTagType === stack[stack.length - 1]) {
        stack.pop();
      } else {
        return stack[stack.length - 1];
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return stack[stack.length - 1];
  }
}

console.log(HTMLElements("<div><div><b>Hello</b></div></p>"));

/*
Have the function LongestWord(sen) take the sen parameter being passed and return the longest word in the string. 
If there are two or more words that are the same length, return the first word from the string with that length. 
Ignore punctuation and assume sen will not be empty. Words may also contain numbers, for example "Hello world123 567"
*/

function LongestWord(sen) {
  let cleanStr = sen.replace(/[^\w\s]/gi, "").split(" ");
  let counter = cleanStr[0];
  for (let i = 0; i < cleanStr.length; i++) {
    if (cleanStr[i].length > counter.length) {
      counter = cleanStr[i];
    }
  }
  return counter;
}

console.log(LongestWord("fun&!! time losandd"));
console.log(LongestWord("funlko&!! time"));
