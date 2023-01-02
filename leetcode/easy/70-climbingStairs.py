def climbStairs(n):
  one, two = 1, 1

  for i in range(n - 1):
    temp = one
    one = one + two
    two = temp

  return one

# bottom up dynamic programming with memoization

# n = 3

# one = 1
# two = 1

# range(n - 1) -> range(2) -> i = 0, 1

# i = 0
# one = 2
# two = 1

# i = 1
# one = 3
# two = 2
