def isSubtree(root, subRoot):
  if not subRoot: return True
  if not root: return False

  if isSameTree(root, subRoot):
    return True
  
  return isSubtree(root.left, subRoot) or isSubtree(root.right, subRoot)


def isSameTree(root, subRoot):
  if not root and not subRoot:
    return True

  if root and subRoot and root.val == subRoot.val:
    return isSameTree(root.left, subRoot.left) and isSameTree(root.right, subRoot.right)

  return False