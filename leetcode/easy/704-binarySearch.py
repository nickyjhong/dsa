def search(nums, target):
  left = 0
  right = len(nums) - 1

  while left <= right:
    midway = (left + right) // 2
    if nums[midway] > target: # everything to the right is too large
      right = midway - 1
    elif nums[midway] < target: # everything to the left is too small
      left = midway + 1
    else:
      return midway

  return -1