# Union-Find
  # Connecting nodes by finding common parent
  # Whenever we merge connected components, we decrement n by 1 (n -= 1) to show that it is now part of a larger connected component

def countComponents(n, edges):
  # Each node is the parent of itself
  parent = [ i for i in range(n) ]
  # Optimization - maintain the size of the connected component (starts at 1)
  # Root parent's rank/size goes up whenever merged
  rank = [1] * n

  # Find root parent
  def find(n1):
    result = n1

    while result != parent[result]:
      # Optimization - path compression -> set parent of result to grandparent to shorten linked list
      # If it doesn't exist, this line will do nothing
      parent[result] = parent[parent[result]]
      # Update current pointer to be the parent - go up the chain
      result = parent[result]
    # Return root parent
    return result

  # Union components to root parents
  def union(n1, n2):
    # Find root parents of each nodes
    parent1, parent2 = find(n1), find(n2)

    # If same parent, return immediately - nothing was merged
    if parent1 == parent2:
      return 0

    # Do union by rank to make the parent with higher rank the root parent
    if rank[parent2] > rank[parent1]:
      parent[parent1] = parent2
      rank[parent2] += rank[parent1]
    else:
      parent[parent2] = parent1
      rank[parent1] += rank[parent2]
    # Return 1 if union was successful
    return 1

  result = n
  for n1, n2 in edges:
    result -= union(n1, n2)

  return result

# [[0,1], [1,2], [3,4]]
# parent = [0, 1, 2, 3, 4]
# rank = [1, 1, 1, 1, 1]

# parent = [0, 0, 2, 3, 4]
# rank = [2, 1, 1, 1, 1]
# 5 - 1 = 4

# parent = [0, 0, 0, 3, 4]
# rank = [3, 1, 1, 1, 1]
# 4 - 1 = 3

# parent = [0, 0, 0, 3, 3]
# rank = [3, 1, 1, 2, 1]
# 3 - 1 = 2

# 2 connected components