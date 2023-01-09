"""
# Definition for a Node.
class Node:
    def __init__(self, val = 0, neighbors = None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []
"""

def cloneGraph(node):
  # To keep track of the nodes we've copied
  oldToNew = {}

  # Clone node and neighbors recursively
  def dfs(node):
    # If the node was already copied, return it
    if node in oldToNew:
      return oldToNew[node]

    # Make a copy of the node and map the old node to the copied new node
    copy = Node(node.val)
    oldToNew[node] = copy

    # Make copies of the neighbors of the nodes
    for neighbor in node.neighbors:
      # DFS returns copy of neighbor created and add to copy.neighbors list
      copy.neighbors.append(dfs(neighbor))
    return copy

  # Edge case - if there is no node, return None
  return dfs(node) if node else None