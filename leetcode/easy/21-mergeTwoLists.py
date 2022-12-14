class Solution:
  def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
    dummy = ListNode(None)
    tail = dummy
    current1 = list1
    current2 = list2

    while current1 and current2:
      if current1.val < current2.val:
        tail.next = current1
        current1 = current1.next
      else:
        tail.next = current2
        current2 = current2.next
        
      tail = tail.next

    if current1:
      tail.next = current1
    if current2:
      tail.next = current2

    return dummy.next