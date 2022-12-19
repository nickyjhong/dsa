# DFS Recursive
def maxDepth(root):
  if not root:
    return 0

  return 1 + max(maxDepth(root.left), maxDepth(root.right))

# BFS Iterative
def maxDepth(root):
  if not root:
    return 0
  
  level = 0
  queue = deque([ root ])
  while queue:
    for i in range(len(queue)):
      node = queue.popleft()
      if node.left:
        queue.append(node.left)
      if node.right:
        queue.append(node.right)
    
    level += 1
  return level

# DFS Iterative - Pre-order
def maxDepth(root):
  stack = [[ root, 1 ]]
  result = 0

  while stack:
    node, depth = stack.pop()
    
    if node:
      result = max(result, depth)
      stack.append([ node.left, depth + 1 ])
      stack.append([ node.right, depth + 1])

  return result