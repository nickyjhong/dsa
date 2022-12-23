def productExceptSelf(nums):
  # result array starts off with 1 in each spot for length of nums array
  result = [1] * (len(nums))

  # in first pass, go left to right in nums array and store prefix values in result array
  prefix = 1
  for i in range(len(nums)):
    result[i] = prefix
    prefix *= nums[i]

  # in second pass, go right to left in nums array and multiple postfix by the prefix in the result array
  postfix = 1
  for i in range(len(nums) -1, -1, -1):
    result[i] *= postfix
    postfix *= nums[i]

  return result