// Is it a palindrome?

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(str) {
    let copy = str.toLowerCase()
      .split('')
      .slice()
      .reverse()
      .join('')
    
    return str.toLowerCase() === copy
  }