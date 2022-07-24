// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
// If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order.
// If no two numbers sum up tio the target sum, the function should return an empty array.

// Sample input:
// {
//   "array": [3, 5, -4, 8, 11, 1, -1, 6],
//   "targetSum": 10
// }

// Sample output: [-1, 11]

function twoNumberSum(array, targetSum) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]]
      } 
    }
  }
  return [];
}

// function twoNumberSum(array, targetSum) {
//   let result = []
//   for (let i = 0; i < array.length; i++) {
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[i] + array[j] === targetSum) {
//         result.push(array[i], array[j])
//       } 
//     }
//   }
//   return result
// }