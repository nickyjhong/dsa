# Trees cannot have loops
# Trees must be connected

def validTree(n, edges):
  # Empty graph counts as tree
  if not n:
    return True

  # Create an adjacency list - undirected edges between nodes (goes both ways)
  adjList = { i: [] for i in range(n) }
  for n1, n2 in edges:
    adjList[n1].append(n2)
    adjList[n2].append(n1)
  
  visit = set()

  # Need positive to avoid false positives for loop detection
  def dfs(i, prev):
    # i has already been visited - loop detected
    if i in visit:
      return False

    visit.add(i)

    # Go through neighbors of i
    for j in adjList[i]:
      # If j == previous node, skip iteration
      if j == prev:
        continue
      # If dfs(j, i) is False - loop detected
      if not dfs(j, i):
        return False
    # No loops detected
    return True
  
  # Start at node 0 and previous value is -1 because -1 will never exist in graph
  # Every node is visited = every node is connected
  return dfs(0, -1) and n == len(visit)