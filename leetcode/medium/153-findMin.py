# def findMin(nums):
#   curr_min = float('inf')
#   left = 0
#   right = len(nums) - 1

#   while left <= right:
#     mid = (left + right) // 2
#     curr_min = min(curr_min, nums[mid])

#     if nums[mid] >= nums[left]:
#       left = mid + 1
#     else:
#       right = mid - 1

#   return curr_min

def findMind(nums):
  if len(nums) == 1 or nums[0] < nums[-1]:
    return nums[0]

  left = 0
  right = len(nums) - 1

  while left <= right:
    mid = (left + right) // 2

    # Binary search assumes everything is sorted
    # If the value to the right of the midpoint is less than the value of the midpoint, that means the value on the right is the minimum
    if nums[mid] > nums[mid + 1]:
      return nums[0]
    # If the value to the left of the midpoint is greater than the midpoint, that means the midpoint is the minimum
    elif nums[mid - 1] > nums[mid]:
      return nums[mid]
    else:
      # Start binary search
      # If the value of the midpoint is greater than the value of the right pointer, the min value is to the right of the midpoint (everything to the left is greater)
      if nums[mid] > nums[right]:
        left = mid + 1
      # The min value is to the left of the midpoint (everything to the right is greater)
      else:
        right = mid - 1