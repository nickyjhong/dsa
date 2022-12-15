def longestConsecutiveSequence(nums):
  numSet = set(nums)
  longest = 0

  for num in nums:
    # check if start of sequence:
    if (num - 1) not in numSet: # does not have left neighbor
      length = 0 # length of sequence
      while (num + length) in numSet: # n + length will check current number
        length += 1
      longest = max(longest, length)

  return longest