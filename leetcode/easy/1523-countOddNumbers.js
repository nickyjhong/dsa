// Given two non-negative integers low and high. Return the count of odd numbers between low and high (inclusive).

// Input: low = 3, high = 7
// Output: 3

// Time: O(1)
// Space: O(1)

const countOdds = (low, high) => {
  if (low % 2 === 0 && high % 2 === 0) return (high - low) / 2
  return Math.floor((high - low) / 2) + 1
}