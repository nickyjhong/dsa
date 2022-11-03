// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100]

// Time: O(n)
// Space: O(n)

const sortedSquares = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let result = [];

  for (let i = right; i >= 0; i--) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      result[i] = Math.pow(nums[right], 2);
      right--;
    } else {
      result[i] = Math.pow(nums[left], 2);
      left++;
    }
  }
  return result;
};
