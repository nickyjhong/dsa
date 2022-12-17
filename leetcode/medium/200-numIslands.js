// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Input: grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// Output: 1

// Time: O(nm)
// Space: O(nm)

const numIslands = (grid) => {
  const rows = grid.length
  const cols = grid[0].length
  let islands = 0

  const dfs = (row, col) => {
    // check if the row and col are in bounds and an island / '1'
    if (row >= 0 && row < rows.length && col >= 0 && col < cols.length && grid[row][col] === '1') {
      // turn it into water / '0' so we mark it as 'visited'
      grid[row][col] = '0'
      dfs(row + 1, col) // top
      dfs(row - 1, col) // bottom
      dfs(row, col + 1) // right
      dfs(row, col - 1) // left
    }
  }

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === '1') {
        islands++
        dfs(row, col)
      }
    }
  }

  return islands
}