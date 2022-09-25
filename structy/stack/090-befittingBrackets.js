// Write a function, befittingBrackets, that takes in a string as an argument. 
// The function should return a boolean indicating whether or not the string contains correctly matched brackets.

// You may assume the string contains only characters: ( ) [ ] { }

// befittingBrackets('(){}[](())'); // -> true
// befittingBrackets('{[]}({}'); // -> false

// n = length of string
// Time: O(n)
// Space: O(n)

const befittingBrackets = (str) => {
  let stack = [];
  
  const brackets = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  }
  // if str length is odd, it cannot have all opening and curly braces
  if (str.length % 2 === 1) return false;
  
  for (let char of str) {
    // check if char is a key in brackets - will NOT check values
    // check if char is an opener
    if (char in brackets) {
      // push closer to stack
      stack.push(brackets[char])
    } else {
      // if last element of stack (top of stack) is the same as the current char
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

/* Notes
- Use a stack to keep track of which bracket you saw
- Use push/pop
- Make an object where key = opening, value = closing
  - Reference in for of
*/