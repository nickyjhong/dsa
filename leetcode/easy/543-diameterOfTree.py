def diameterOfBinaryTree(root):
  result = 0

  def dfs(root):
    # Need to use nonlocal keyword because we're getting result from outer function
    nonlocal result

    if not root:
      return 0

    # Find the longest path in both left and right children
    left = dfs(root.left)
    right = dfs(root.right)
    result = max(result, left + right)

    # Add 1 for the path connecting the node and its parent
    return 1 + max(left, right)

  dfs(root)
  return result