// Given a string s, find the length of the longest substring without repeating characters.

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Time: O(n)
// Space: O(n)

const lengthOfLongestSubstring = (s) => {
  let set = new Set()
  let left = 0
  let max = 0

  for (let right = 0; right < s.length; right++) {
    while (set.has(s[right])) {
      set.delete(s[left])
      left++
    }
    set.add(s[right])
    max = Math.max(max, set.size)
  }
  return max
}