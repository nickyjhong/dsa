// Write a function, mostFrequentChar, that takes in a string as an argument. 
// The function should return the most frequent character of the string. 
// If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.

// n = length of string
// Time: O(n)
// Space: O(n)

const mostFrequentChar = (str) => {
  let count = {};

  // make a hash table to keep track of how many times a letter comes up
  for (let char of str) {
    if (!count[char]) {
      count[char] = 1
    } else {
      count[char]++
    }
  }

  // iterate through the string again using the hash count
  let mostFreq = null;
  for (let char of s) {
    // set the first letter to mostFreq by default OR if the count of character is higher than count of mostFreq
    if (mostFreq === null || count[char] > count[mostFreq]) {
      mostFreq = char;
    }
  }
  return mostFreq;
}