def lengthOfLongestSubstring(s):
  substring_set = set()
  left = 0
  result = 0

  for right in range(len(s)):
    while s[right] in substring_set:
      substring_set.remove(s[left])
      left += 1
    substring_set.add(s[right])
    result = max(result, len(substring_set))

  return result