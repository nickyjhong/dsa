// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Time: O(n)
// Space: O(1)

const reverseList = (head) => {
  let current = head;
  let prev = null;

  while(current !== null) {
    // need to initialize next here so we don't lose access to the value and can re-use it later!
    let next = current.next;
    // on our first run through, our head becomes the tail and then it should point to NULL
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}