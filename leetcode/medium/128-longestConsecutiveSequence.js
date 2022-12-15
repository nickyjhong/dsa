// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.
// You must write an algorithm that runs in O(n) time.

// Input: nums = [100,4,200,1,3,2]
// Output: 4
// Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

// Time: O(n)
// Space: O(n)

const longestConsecutiveSequence = (nums) => {
  let numSet = new Set(nums)
  let longest = 0

  for (num of nums) {
    if (!numSet.has(num - 1)) {
      length = 0
      while (numSet.has(num + length)) {
        length++
      }
      longest = Math.max(longest, length)
    }
  }
  return longest
}