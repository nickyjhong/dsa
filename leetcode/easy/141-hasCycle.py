def hasCycle(head):
  slow = head
  fast = head

  while fast and fast.next:
    slow = slow.next
    fast = fast.next.next

    if slow.val == fast.val:
      return True
    
  return False