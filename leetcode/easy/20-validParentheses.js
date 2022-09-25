// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "(]"
// Output: false

const isValid = (s) => {
  let stack = [];

  // make an object where key = opener, value = closer
  let brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  if (s.length % 2 === 1) return false;

  // iterate through values of
  for (let char of s) {
    // if the current char is a KEY in brackets (is an opener)
    if (char in brackets) {
      // push the VALUE (closer) to the stack
      stack.push(brackets[char]);
    } else {
      // if the stack isn't empty and the last (top) ele in stack is equal to the current char
      if (stack.length > 0 && stack[stack.length - 1] === char) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// isValid('{[]}({}')
// stack = ['}']
// stack = ['}', ']']
// ']' === stack[stack.length - 1] AKA ']'
// stack.pop()
// stack = ['}']
// '}' === stack[stack.length - 1] AKA '}'
// stack = []
// stack = [')']
// stack = [')', '}']
// '}' === stack[stack.length - 1] AKA '}'
// stack.length !== 0 // FALSE
