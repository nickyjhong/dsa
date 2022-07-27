// Write a function, anagrams, that takes in two strings as arguments.
// The function should return a boolean indicating whether or not the strings are anagrams. 
// Anagrams are strings that contain the same characters, but in any order.

// n = length of string 1
// m = length of string 2
// Time: O(n + m)
// Space: O(n)

const anagrams = (s1, s2) => {
  const count = {};
  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }
  
  for (let char of s2) {
    if (count[char] === undefined) {
      return false;
    } else {
      count[char] -= 1;
    }
  }
  
  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }
  
  return true;
};

// const anagrams = (s1, s2) => {
//   const s1Sort = s1.split('').sort().join('')
//   const s2Sort = s2.split('').sort().join('')
  
//   if (s1Sort === s2Sort ) return true
//   return false
// };

module.exports = {
  anagrams,
};

/* Notes:
- Use objects
- Convert s1 into an object to count the number of chars
- Check if char is NOT in the count yet -> initialize it
- count[char]++ on every iteration
- Iterate through s2 and decrement
- Edge case: If count[char] === undefined return false
- If it's an anagram, all counts should be 0
*/


