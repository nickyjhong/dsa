// Write a function, addLists, that takes in the head of two linked lists, each representing a number.
// The nodes of the linked lists contain digits as values. The nodes in the input lists are reversed; this means that the least significant digit of the number is the head.
// The function should return the head of a new linked listed representing the sum of the input lists. The output list should have its digits reversed as well.

//   39
// + 47
// ----
//   86

// const a1 = new Node(9);
// const a2 = new Node(3);
// a1.next = a2; // 9 -> 3

// const b1 = new Node(7);
// const b2 = new Node(4);
// b1.next = b2; // 7 -> 4

// addLists(a1, b1); // 6 -> 8

// n = length of list 1
// m = length of list 2
// Time: O(max(n, m))
// Space: O(max(n, m))

const addLists = (head1, head2) => {
  const dummyHead = new Node(null);
  let tail = dummyHead;

  let carry = 0;
  let current1 = head1;
  let current2 = head2;
  
  while (current1 !== null || current2 !== null || carry !== 0) {
    const val1 = current1 === null ? 0 : current1.val;
    const val2 = current2 === null ? 0 : current2.val;
    const sum = val1 + val2 + carry;
    carry = sum > 9 ? 1 : 0;

    const digit = sum % 10;
    tail.next = new Node(digit);
    tail = tail.next;

    if (current1 !== null) current1 = current1.next;
    if (current2 !== null) current2 = current2.next;
  }
  return dummyHead.next;
};
