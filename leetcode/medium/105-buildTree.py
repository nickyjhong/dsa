def buildTre(preorder, inorder):
  if not preorder or not inorder:
    return None

  # First value of list is always the root
  root = TreeNode(preorder[0])
  mid = inorder.index(preorder[0])

  # Create sublists for left and right subtrees

  # Index of 1 - mid, up to but not including mid
  root.left = buildTree(preorder[1: mid + 1], inorder[:mid])
  # Index of mid - end
  root.right = buildTree(preorder[mid + 1:], inorder[mid + 1:])

# preorder = [3, 9, 20, 15, 7]
# inorder = [9, 3, 15, 20, 7]

# root = 3
# mid = 1
# root.left = preorder -> [9] / inorder -> [9]
# root.right = preorder -> [20, 15, 7] / inorder -> [15, 20, 7]
# output = [3]

# root = 9
# mid = 0
# root.left = preorder -> None / inorder -> None
# root.right = preorder -> None / inorder -> None
# output = [3, 9]

# root = 20
# mid = 1
# root.left = preorder -> [15] / inorder -> [15]
# root.right = preorder -> [7] / inorder -> [7]
# output = [3, 9, 20]

# root = 15
# mid = 0
# root.left = preorder -> None / inorder -> None
# root.right = preorder -> None / inorder -> None
# output = [3, 9, 20, null, null, 15, 7]