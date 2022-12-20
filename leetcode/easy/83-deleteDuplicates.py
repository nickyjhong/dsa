def deleteDuplicates(head):
  current = head
  
  while current is not None and current.next is not None:
    next = current.next
    if current.val == next.val:
      current.next = next.next
    else:
      current = next
      
  return head