# Preorder traversal - visit root, then all left child nodes, then all right child nodes

def preorderTraversalRecursive(root):
  result = []

  def dfs(node):
    if not node:
      return
    
    # Visit root first, then left subtree, then right subtree
    result.append(node.val)
    dfs(node.left)
    dfs(node.right)

  dfs(root)
  return result


def preorderTraversalIterative(root):
  result = []
  stack = [ root ]

  while stack:
    current = stack.pop()
    if current:
      result.append(current.val)
      # Visit right before left so we can pop and visit the left child before the right child
      stack.append(current.right)
      stack.append(current.left)

  return result