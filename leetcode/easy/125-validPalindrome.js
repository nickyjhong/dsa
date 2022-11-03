// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, 
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Time: O(n)
// Space: O(1)

const isPalindrome = (s) => {
  s = s.toLowerCase();
  s = s.replace(/[^A-Za-z0-9]/g, '');

  let start = 0;
  let end = s.length-1; 
  
  while (start < end){
    if(s[start] !== s[end]) return false
    start++;
    end--;
  }
  return true
};

// Time: O(n)
// Space: O(n)

// const isPalindrome = (s) => {
//   if (s.length === 1) return true;
//   // only alphanumeric
//   // g = global (doesnt just stop after replacing once) i = case insensitive
//   let str = s.replace(/[^A-Z0-9]/gi, "").toLowerCase();
//   let reverseStr = str.toLowerCase().split("").reverse().join("")
//   return str === reverseStr
// }