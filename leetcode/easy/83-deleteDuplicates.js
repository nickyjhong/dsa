// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.

// Input: head = [1,1,2]
// Output: [1,2]

// Time: O(n)
// Space: O(1)

const deleteDuplicates = (head) => {
  let current = head;
  while (current !== null && current.next !== null) {
    let after = current.next;
    if (current.val === after.val) {
      current.next = after.next;
    } else {
      current = after;
    }
  }
  return head;
}