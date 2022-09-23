// Write a function, getNodeValue, that takes in the head of a linked list and an index. 
// The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// a -> b -> c -> d

// getNodeValue(a, 2); // 'c'

// ITERATIVE
// n = number of nodes
// Time: O(n)
// Space: O(1)

const getNodeValue = (head, index) => {
  let current = head;
  let count = 0;
  while (current !== null) {
    if (count === index) return current.val;
    current = current.next;
    count++
  }
  return null
};

// RECURSIVE
// n = number of nodes
// Time: O(n)
// Space: O(n)

const getNodeValue = (head, index) => {
  if (head === null)  return null;
  if (index === 0) return head.val;
  // decrease index by 1 -> index acts as count
  // when index reaches zero, you reached the count === index
  return getNodeValue(head.next, index - 1)
};