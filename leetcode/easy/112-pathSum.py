def hasPathSum(root):
  if not root:
    return False
  
  targetSum -= root.val

  if not root.left and not root.right:
    return targetSum == 0

  return hasPathSum(root.left, targetSum) or hasPathSum(root.right, targetSum)