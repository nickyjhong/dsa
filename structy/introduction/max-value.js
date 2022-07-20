// Write a function, maxValue, that takes in array of numbers as an argument. 
// The function should return the largest number in the array.

// Solve this without using any built-in array methods.

// You can assume that the array is non-empty.

// n = length of array
// Time: O(n)
// Space: O(1)

const maxValue = (nums) => {
  let maximum = -Infinity;

  for (let num of nums) {
    if (num > maximum) maximum = num;
  }
  
  return maximum;
};

module.exports = {
  maxValue,
};

/* Notes
- Set max to -Infinity to deal with negative numbers
- For of loop iterates through elements instead of indices
*/