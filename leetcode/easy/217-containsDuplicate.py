def containsDuplicates(nums):
  numCount = {}
  for num in nums:
    if num in numCount:
      return True
    else:
      numCount[num] = 1

  return False