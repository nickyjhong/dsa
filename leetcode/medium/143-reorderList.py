def reorderList(head):
  # Find the middle of the linked list
  slow = head
  fast = head.next

  while fast and fast.next:
    slow = slow.next
    fast = fast.next.next

  # Reverse the second half of the linked list to make it easier to merge later / change direction of linked list
  second = slow.next
  prev = slow.next = None

  while second:
    temp = second.next
    second.next = prev
    prev = second
    second = temp

  # Merge the two halves of the linked lists
  first = head
  second = prev

  while second:
    temp1 = first.next
    temp2 = second.next
    first.next = second
    second.next = temp1
    first = temp1
    second = temp2