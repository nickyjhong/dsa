// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array
// of the same length with the squares of the original integers also sorted in ascending order.

// Sample input:
// array = [1, 2, 3, 5, 6, 8, 9],
// array2 = [-2, -1]

// Sample output: [1, 4, 9, 25, 36, 61, 81]
// Sample output: [1, 4]

// Solution 2:

// Time: O(n)
// Space: O(n) - n is length of array

function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0)
  let smallerValueIdx = 0;
  let largerValueIdx = array.length - 1;

  for (let idx = array.length - 1; idx >= 0; idx--) {
    const smallerValue = array[smallerValueIdx];
    const largerValue = array[largerValueIdx];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[idx] = smallerValue * smallerValue;
      smallerValueIdx++
    } else {
      sortedSquares[idx] = largerValue * largerValue;
      largerValueIdx--
    }
  }
  return sortedSquares
}


// Solution 1: Brute-force

// Time: O(nlogn) - because of sorting
// Space: O(n) - n is length of array

// function sortedSquaredArray(array) {
//   let result = []
//   for (let i = 0; i < array.length; i++) {
//     result.push(Math.pow(array[i], 2))
//   }
//   result.sort((a, b) => a-b)
//   return result;
// }

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray;


/* Notes: 
- Solution 1: Bad time complexity because of sort -> O(nlogn)
- Solution 2:
  - Fill an array with 0s
  - Two pointers (1 starts at beginning, 1 starts at end)
  - Going to fill in the array starting at the end (largest value)
    - The two pointers are going to "compete" to see which absolute value is larger AKA squared is larger
  - Compare the absolute value of array's first number and last number
    - If last number is larger -> sorted array's last index is going to be the squared val of the last number
      - Index of end of array --
    - If first number is larger -> sorted array's first index is going to be the squared val of the first number
      - Index of beginning of array ++
  - When start and end pointer are at the same point, that is the last element of the array
*/