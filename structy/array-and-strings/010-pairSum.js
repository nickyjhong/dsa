// Write a function, pairSum, that takes in an array and a target sum as arguments. 
// The function should return an array containing a pair of indices whose elements sum to the given target. 
// The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.
// There is guaranteed to be one such pair that sums to the target.

// pairSum([3, 2, 5, 4, 1], 8); // -> [0, 2]


// OPTIMIZED - use a hash map and calculate complements on sum
// n = length of array
// Time: O(n)
// Space: O(n)

const pairSum = (numbers, targetSum) => {
  let previous = {};
  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i]
    const complement = targetSum - num;
    // check to see if the value of complement is a key in the previous hash
    if (complement in previous) {
      // if it is a value, return the index of current number (i) and the index of the complement (previous[complement])
      return [i, previous[complement]]
    } else {
      // otherwise, store the value in the hash
      previous[num] = i;
    }
  }
}

// BRUTE FORCE
// n = length of array
// Time: O(n^2)
// Space: O(1)

const pairSum = (numbers, targetSum) => {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === targetSum) {
        result.push(i, j)
      }
    }
  }
  return result;
};

/* Notes
- Hash map key is value of number and value is the index
*/