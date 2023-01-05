def minStartValue(nums):
  min_value = 0
  total = 0

  # Find the minimum value that the total will reach
  for num in nums:
    total += num
    min_value = min(min_value, total)

  # Get the absolute value of the min_value and add 1 so that the lowest step is equal to 1 (smallest positive integer)
  # If lowest step is <= 0 it is invalid
  # If lowest step is > 1 that means there is a smaller minimum value
  return -min_value + 1

# nums = [-3,2,-3,4,2]

# num = -3
# total = -3
# min_value = -3

# num = 2
# total = 1
# min_value = -3

# num = -3
# total = -4
# min_value = -4

# num = 4
# total = 0
# min_value = -4

# num = 2
# total = 2
# min_value = -4

# -(-4) = 4 + 1 = 5