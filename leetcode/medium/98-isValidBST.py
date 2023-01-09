def isValidBST(root):
  # Helper function takes in node, left boundary, right boundary
  def valid(node, left, right):
    # Empty BST is still a BST
    if not node:
      return True
    # Valid BST means left boundary < node.val < right boundary
    # If this is not true, return False -> not valid
    if not (node.val < right and node.val > left):
      return False

    # Call on left and right children of current node, using the current node's value as the new left or right boundaries
    return valid(node.left, left, node.val) and valid(node.right, node.val, right)

  # Initial left boundary is -infinity and right boundary is positive infinity
  return valid(root, float('-inf'), float('inf'))