def removeNthFromEnd(head, n):
  dummy = ListNode(0, head)
  left = dummy
  right = head

  while n > 0 and right:
    right = right.next
    n -= 1

  while right:
    left = left.next
    right = right.next

  left.next = left.next.next
  return dummy.next

# [1, 2, 3, 4, 5] n = 2
# dummy = [0, 1, 2, 3, 4, 5]
# left = 0
# right = 1

# while n > 0 and right:
#   right = 2
#   n = 1

#   right = 3
#   n = 0

# while right:
#   left = 2
#   right = 4

#   left = 3 
#   right = 5

# left.next = left.next.next -> 3.next = 5

# dummy.next -> [1, 2, 3, 5]