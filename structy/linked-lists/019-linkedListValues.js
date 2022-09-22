// Write a function, linkedListValues, that takes in the head of a linked list as an argument. 
// The function should return an array containing all values of the nodes in the linked list.

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");

// a.next = b;
// b.next = c;
// c.next = d;

// a -> b -> c -> d

// linkedListValues(a); // -> [ 'a', 'b', 'c', 'd' ]


// ITERATIVE
// n = number of nodes
// Time: O(n)
// Space: O(n)

const linkedListValues = (head) => {
  let result = [];
  let current = head;

  while(current !== null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// RECURSIVE
// n = number of nodes
// Time: O(n)
// Space: O(n)

const linkedListValues = (head) => {
  const result = [];
  fillResult(head, result) // mutate result array
  return result;
}

const fillResult = (head, result) => {
  if (head === null) return;
  result.push(head.val)
  fillResult(head.next, result)
}

/* Notes
- Good practice to make the function refer to current node (can do it but it ends up clunky)
  - Just worry about current val
*/