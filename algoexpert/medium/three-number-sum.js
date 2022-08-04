// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum.
// The function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all these triplets.
// The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect
// to the numbers they hold.

// If no three numbers sum up to the target sum, the function should return an empty array.

// Input: array = [12, 3, 1, 2, -6, 5, -8, 6], targetSum = 0
// Output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]


// Time: O(n^2)
// Space: O(n)

function threeSum(arr, target) {
  arr.sort((a, b) => a - b)
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let first = i;
    let left = i + 1;
    let right = arr.length - 1;

    // while left < right

    // if first + left + right === target
      // result.push([first, left, right])
      // left ++
      // right --

    // if first + left + right > target
      // right --
    // if first + left + right < target
      // left++

    while (left < right) {
      let tempSum = arr[first] + arr[left] + arr[right]
      if (tempSum === target) {
        result.push([arr[first], arr[left], arr[right]])
        left++
        right--
      }
      if (tempSum > target) {
        right--
      }
      if (tempSum < target) {
        left++
      }
    }
  }
  return result;
}