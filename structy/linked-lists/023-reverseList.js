// Write a function, reverseList, that takes in the head of a linked list as an argument. 
// The function should reverse the order of the nodes in the linked list in-place and return the new head of the reversed linked list.

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

// a.next = b;
// b.next = c;
// c.next = d;
// d.next = e;
// e.next = f;

// a -> b -> c -> d -> e -> f

// reverseList(a); // f -> e -> d -> c -> b -> a

// ITERATIVE
// n = number of nodes
// Time: O(n)
// Space: O(1)

const reverseList = (head) => {
  let current = head;
  let prev = null;

  while(current !== null) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

// RECURSIVE
// n = number of nodes
// Time: O(n)
// Space: O(n)

const reverseList = (head, prev = null) => {
  if (head === null) return prev;
  const next = head.next;
  head.next = prev;
  return reverseList(next, head);
}

/* Notes
- Use three pointers for iterative (current, previous, next)
  - Previous is first set to null because there is nothing before head (current)
*/