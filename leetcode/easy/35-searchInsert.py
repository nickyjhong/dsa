def searchInsert(nums, target):
  left = 0
  right = len(nums) - 1

  while left <= right:
    mid = (left + right) // 2

    if nums[mid] == target:
      return mid

    if nums[mid] < target:
      left = mid + 1

    if nums[mid] > target:
      right = mid - 1

  # While loop will run until left, mid, and right are at the same number
  # If the last number still isnt the target, left will increment by 1 which will be the index of the target if inserted
  return left