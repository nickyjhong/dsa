def lowestCommonAncestory(root, p, q):
  current = root

  while current:
    # Check right subtree
    if p.val > current.val and q.val > current.val:
      current = current.right
    # Check left subtree
    elif p.val < current.val and q.val < current.val:
      current = current.left
    else:
      return current