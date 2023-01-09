from collections import deque

def levelOrder(root):
  result = []
  queue = deque()

  if root:
    queue.append(root)

  while queue:
    queue_length = len(queue)
    level = []

    for i in range(queue_length):
      node = queue.popleft()
      level.append(node.val)

      if node.left:
        queue.append(node.left)
      if node.right:
        queue.append(node.right)
    result.append(level)

  return result