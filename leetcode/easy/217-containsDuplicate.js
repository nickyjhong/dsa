// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Input: nums = [1,2,3,1]
// Output: true

// Time: O(n)
// Space: O(n)

const containsDuplicate = (nums) => {
  let numsHash = {}
  for (let num of nums) {
    if (!numsHash[num]) {
      numsHash[num] = 1
    } else {
      return true;
    }
  }
  return false;
}