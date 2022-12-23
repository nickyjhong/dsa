def characterReplacement(s, k):
  count = {}
  result = 0
  left = 0
  maxFreq = 0

  for right in range(len(s)):
    count[s[right]] = 1 + count.get(s[right], 0)
    # Find the most frequent character
    maxFreq = max(maxFreq, count[s[right]])

    # Check if sliding window is valid
    if (right - left + 1) - maxFreq > k:
      # Decrement the count of the character at left
      count[s[left]] -= 1
      # Move sliding window up
      left += 1

    # Result is biggest number - result or length of sliding window
    result = max(result, right - left + 1)
  
  return result