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
  return deletions;
}
