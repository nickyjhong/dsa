// Write a function, pairedParentheses, that takes in a string as an argument. 
// The function should return a boolean indicating whether or not the string has well-formed parentheses.

// You may assume the string contains only alphabetic characters, '(', or ')'.

// pairedParentheses("(david)((abby))"); // -> true
// pairedParentheses("()rose(jeff"); // -> false

// n = length of string
// Time: O(n)
// Space: O(1)
const pairedParentheses = (str) => {
  let count = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      count++
    } else if (str[i] === ')') {
      if (count === 0) {
        return false
      } else {
        count--
      }
    }
  }
  return count === 0;
};