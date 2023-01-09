def pacificAtlantic(heights):
  rows, cols = len(heights), len(heights[0])
  pac, atl = set(), set()

  def dfs(row, col, visit, prevHeight):
    # If it was already visited or is out of bounds
    if ((row, col) in visit or row < 0 or col < 0 or row == rows or col == cols or heights[row][col] < prevHeight):
      return

    visit.add((row, col))
    dfs(row + 1, col, visit, heights[row][col])
    dfs(row - 1, col, visit, heights[row][col])
    dfs(row, col + 1, visit, heights[row][col])
    dfs(row, col - 1, visit, heights[row][col])
  
  for col in range(cols):
    # prevHeight default will use row and col inserted
    dfs(0, col, pac, heights[0][col]) # First row - refers to Pacific
    dfs(rows - 1, col, atl, heights[rows - 1][col]) # Last row - refers to Atlantic

  for row in range(rows):
    dfs(row, 0, pac, heights[row][0]) # First col - refers to Pacific
    dfs(row, cols - 1, atl, heights[row][cols - 1]) # Last col - refers to Atlantic

  result = []

  # Go through all nodes and check if they reach both Pacific and Atlantic
  for row in range(rows):
    for col in range(cols):
      if (row, col) in pac and (row, col) in atl:
        result.append([ row, col ])

  return result