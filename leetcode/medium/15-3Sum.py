def threeSum(nums):
  nums.sort()
  result = []

  for index, num in enumerate(nums):
    if index > 0 and num == nums[index - 1]: continue
    left = index + 1
    right = len(nums) - 1

    while left < right:
      equalsZero = num + nums[left] + nums[right]

      if equalsZero == 0:
        result.append([num, nums[left], nums[right]])
        left += 1
        while nums[left] == nums[left - 1] and left < right:
          left += 1
      elif equalsZero < 0:
        left += 1
      else:
        right -= 1

  return result
