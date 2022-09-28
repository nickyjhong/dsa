// Write a function, depthFirstValues, that takes in the root of a binary tree. 
// The function should return an array containing all values of the tree in depth-first order.

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

// depthFirstValues(a); 
//    -> ['a', 'b', 'd', 'e', 'c', 'f']

// ITERATIVE
// n = number of nodes
// Time: O(n)
// Space: O(n)

const depthFirstValues = (root) => {
  if (root === null) return [];
  let stack = [ root ]
  let result = [];
  
  while(stack.length > 0) {
  const current = stack.pop();
    result.push(current.val);
    if(current.right) stack.push(current.right);
    if(current.left) stack.push(current.left);
  }  
  return result;
};

// RECURSIVE
// n = number of nodes
// Time: O(n)
// Space: O(n)

const depthFirstValues = (root) => {
  if (root === null) return []
  let leftValues = depthFirstValues(root.left);
  let rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues]
};