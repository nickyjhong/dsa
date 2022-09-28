// Given an integer x, return true if x is palindrome integer.
// An integer is a palindrome when it reads the same backward as forward.

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Time: O(n)
// Space: O(1)

const isPalindrome = (x) => {
  // negatives are not palindromes
  if (x < 0) return false;
  let reverse = 0;
  for (let i = x; i >= 1; i = Math.floor(i/10)) {
    reverse = (i % 10) + (reverse * 10)
  }
  return x === reverse
}

// isPalindrome(1221)
// i = 1221
// reverse = (1221 % 10) + (0 * 10) = 1 + 0 = 1
// i = 122
// reverse = (122 % 10) + (1 * 10) = 2 + 10 = 12
// i = 12
// reverse = (12 % 10) + (12 * 10) = 2 + 120 = 122
// i = 1
// reverse = (1 % 10) + (122 * 10) = 1 + 1220 = 1221
// 1221 === 1221
