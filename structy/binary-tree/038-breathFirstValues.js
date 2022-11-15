// Write a function, breadthFirstValues, that takes in the root of a binary tree. 
// The function should return an array containing all values of the tree in breadth-first order.

// const a = new Node('a');
// const b = new Node('b');
// const c = new Node('c');
// const d = new Node('d');
// const e = new Node('e');
// const f = new Node('f');

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      a
//    /   \
//   b     c
//  / \     \
// d   e     f

// breadthFirstValues(a); 
//    -> ['a', 'b', 'c', 'd', 'e', 'f']

// n = number of nodes
// Time: O(n)
// Space: O(n)

// Note: this solution should really be considered O(n^2) runtime because the JavaScript shift() methods runs in O(n). 
// JavaScript does not have a native queue data structure that is maximally efficient.

const breadthFirstValues = (root) => {
  if (root === null) return [];
  let queue = [ root ];
  let result = [];
  
  while(queue.length > 0) {
    const node = queue.shift();
    result.push(node.val);
    if(node.left !== null) queue.push(node.left)
    if(node.right !== null) queue.push(node.right)
  }
  return result;
};