def numIslands(grid):
  rows = len(grid)
  cols = len(grid[0])
  islands = 0

  def dfs(row, col):
    if row in range(rows) and col in range(cols) and grid[row][col] == '1':
      grid[row][col] = '0'
      dfs(row + 1, col)
      dfs(row - 1, col)
      dfs(row, col + 1)
      dfs(row, col - 1)

  for row in range(rows):
    for col in range(cols):
      if grid[row][col] == '1':
        islands += 1
        dfs(row, col)

  return islands