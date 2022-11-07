// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Time: O(n)
// Space: O(1)

const mergeTwoLists = (list1, list2) => {
  // need a dummy node to start
  let dummy = new ListNode();
  let tail = dummy;

  // while both list1 and list2 have nodes
  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }
    tail = tail.next;
  }
  /* this means either list1 or list2 or both no longer have nodes
  If list1 OR list2 no longer have nodes, merge the rest of the list*/

  // tail.next = list1 || list2
  if (list1) dummy.next = list1;
  if (list2) dummy.next = list2;

  return dummy.next;
}