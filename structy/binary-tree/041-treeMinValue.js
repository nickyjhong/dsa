// Write a function, treeMinValue, that takes in the root of a binary tree that contains number values. The function should return the minimum value within the tree.

// You may assume that the input tree is non-empty.

// const a = new Node(3);
// const b = new Node(11);
// const c = new Node(4);
// const d = new Node(4);
// const e = new Node(-2);
// const f = new Node(1);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//       3
//    /    \
//   11     4
//  / \      \
// 4   -2     1

// treeMinValue(a); // -> -2

// DFS Recursive
// n = number of nodes
// Time: O(n)
// Space: O(n)

const treeMinValue = (root) => {
  if (root === null) return Infinity;
  const smallestLeftValue = treeMinValue(root.left)
  const smallestRightValue = treeMinValue(root.right)
  return Math.min(root.val, smallestLeftValue, smallestRightValue)
}

// DFS Iterative
// n = number of nodes
// Time: O(n)
// Space: O(n)

const treeMinValue = (root) => {
  let min = Infinity
  let stack = [ root ]
  while (stack.length > 0) {
    let node = stack.pop()
    if (node.val < min) min = node.val
    if (node.right !== null) stack.push(node.right)
    if (node.left !== null) stack.push(node.left)
  }
  return min
}

// BFS
// n = number of nodes
// Time: O(n)
// Space: O(n) - technically O(n^2)

const treeMinValue = (root) => {
  let min = Infinity
  let queue = [ root ]
  while (queue.length > 0) {
    let node = queue.shift()
    if (node.val < min) min = node.val
    if (node.left !== null) queue.push(node.left)
    if (node.right !== null) queue.push(node.right) 
  }
  return min
}