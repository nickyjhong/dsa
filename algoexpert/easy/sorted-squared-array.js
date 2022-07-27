// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array
// of the same length with the squares of the original integers also sorted in ascending order.

// Sample input:
// array = [1, 2, 3, 5, 6, 8, 9],
// array2 = [-2, -1]

// Sample output: [1, 4, 9, 25, 36, 61, 81]
// Sample output: [1, 4]

// Time: O(nlogn)
// Space: O(n) - n is length of array
function sortedSquaredArray(array) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    result.push(Math.pow(array[i], 2))
  }
  result.sort((a, b) => a-b)
  return result;
}

// Time: O(n)
// Space: O(n) - n is length of array

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;
