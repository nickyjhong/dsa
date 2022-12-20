def isBalanced(root):
  def dfs(root):
    # Boolean T/F and height
    if not root: return [True, 0]
    left = dfs(root.left)
    right = dfs(root.right)
    # Tree is only balanced if BOTH return True and the height difference of left and right is <= 1
    balanced = left[0] and right[0] and abs(left[1] - right[1]) <= 1

    # Will return if tree is balanced and height
    return [balanced, 1 + max(left[1], right[1])]
  
  return dfs(root)[0]