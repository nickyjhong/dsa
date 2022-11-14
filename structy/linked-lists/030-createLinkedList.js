// Write a function, createLinkedList, that takes in an array of values as an argument.
// The function should create a linked list containing each element of the array as the values of the nodes.
// The function should return the head of the linked list.

// createLinkedList(["h", "e", "y"]); // h -> e -> y

// n = length of values array
// Time: O(n)
// Space: O(n)

const createLinkedList = (values) => {
  let dummy = new Node();
  let tail = dummy;
  for (let val of values) {
    let newNode = new Node(val);
    tail.next = newNode;
    tail = tail.next;
  }
  return dummy.next;
};
