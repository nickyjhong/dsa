// Write a function, zipperLists, that takes in the head of two linked lists as arguments. 
// The function should zipper the two lists together into single linked list by alternating nodes. 
// If one of the linked lists is longer than the other, the resulting list should terminate with the remaining nodes. 
// The function should return the head of the zippered linked list.

// Do this in-place, by mutating the original Nodes.

// You may assume that both input lists are non-empty.

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// a.next = b;
// b.next = c;
// a -> b -> c

// const x = new Node("x");
// const y = new Node("y");
// const z = new Node("z");
// x.next = y;
// y.next = z;
// x -> y -> z

// zipperLists(a, x);
// a -> x -> b -> y -> c -> z

// n = length of list 1
// m = length of list 2
// Time: O(min(n, m))
// Space: O(1)

const zipperLists = (head1, head2) => {
  let head = head1; // to be returned at the end
  let tail = head;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0; // need a count to determine which gets merged

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count++
  }

  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;

  return head;
}

