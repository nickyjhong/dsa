# In order DFS traversal
def kthSmallest(root):
  stack = []
  current = root
  
  while current or stack:
    # Go as far left as possible
    while current:
      # After done processing current.left, we need to go back up!! Add to stack
      stack.append(current)
      current = current.left
    # Popped will be smallest values in ascending order
    current = stack.pop()
    k -= 1

    if k == 0:
      return current.val
    
    # Go to right subtree after visiting left
    # Repeat while loop to look for most left element in right subtree
    current = current.right