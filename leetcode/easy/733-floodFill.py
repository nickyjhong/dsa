def floodFill(image, sr, sc, color):
  current = image[sr][sc]
  if current == color:
    return image

  def dfs(row, col):
    row_inbounds = 0 <= row < len(image)
    col_inbounds = 0 <= col < len(image[0])

    if row_inbounds and col_inbounds and image[row][col] == current:
      image[row][col] = color

      dfs(row + 1, col)
      dfs(row - 1, col)
      dfs(row, col + 1)
      dfs(row, col - 1)
  
  dfs(sr, sc)
  return image