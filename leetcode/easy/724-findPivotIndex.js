// Given an array of integers nums, calculate the pivot index of this array.

// The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal
// to the sum of all the numbers strictly to the index's right.

// If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left.
// This also applies to the right edge of the array.

// Return the leftmost pivot index. If no such index exists, return -1.

// Input: nums = [1,7,3,6,5,6]
// Output: 3
// Explanation:
// The pivot index is 3.
// Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
// Right sum = nums[4] + nums[5] = 5 + 6 = 11

// Time: O(n)
// Space: O(1)

const pivotIndex = (nums) => {
  let totalSum = nums.reduce((a, b) => a + b, 0);
  let leftSum = 0;
  for (let i = 0; i < nums.length; i++) {
    // totalSum - leftSum - nums[i] = rightSum
    if (totalSum - leftSum - nums[i] === leftSum) {
      return i;
    } else {
      leftSum += nums[i];
    }
  }
  return -1;
};

// pivotIndex([1, 7, 3, 6, 5, 6])
// totalSum = 28
// 28 - 0 - 1 = 27 // i = 0
// 28 - 1 - 7 = 20 // i = 1
// 28 - 8 - 3 = 17 // i = 2
// 28 - 11 - 6 = 11 // i = 3
//       ^        ^
