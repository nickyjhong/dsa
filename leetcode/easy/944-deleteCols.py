def minDeletionSize(strs):
  count = 0
  rows = len(strs)
  cols = len(strs[0])

  for col in range(cols):
    for row in range(rows - 1): # rows - 1 so it stays in-bounds
      if ord(strs[row][col]) > ord(strs[row + 1][col]):
        count += 1
        break

  return count