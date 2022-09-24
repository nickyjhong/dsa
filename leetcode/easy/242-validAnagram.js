// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, 
// typically using all the original letters exactly once.

// Input: s = "anagram", t = "nagaram"
// Output: true

// Time: O(n + m)
// Space: O(n)

const isAnagram = (s, t) => {
  let sCount = {};
  for (let char of s) {
    if (sCount[char]) {
      sCount[char]++;
    } else {
      sCount[char] = 1;
    }
  }

  for (let char of t) {
    if (sCount[char] === undefined) {
      return false;
    } else {
      sCount[char]--;
    }
  }

  for (let char of s) {
    if (sCount[char] !== 0) return false;
  }
  return true;
};
