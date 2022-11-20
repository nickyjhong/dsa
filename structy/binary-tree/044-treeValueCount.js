// Write a function, treeValueCount, that takes in the root of a binary tree and a target value. 
// The function should return the number of times that the target occurs in the tree.

// const a = new Node(12);
// const b = new Node(6);
// const c = new Node(6);
// const d = new Node(4);
// const e = new Node(6);
// const f = new Node(12);

// a.left = b;
// a.right = c;
// b.left = d;
// b.right = e;
// c.right = f;

//      12
//    /   \
//   6     6
//  / \     \
// 4   6     12

// treeValueCount(a,  6); // -> 3

// DFS Recursive
// n = number of nodes
// Time: O(n)
// Space: O(n)

const treeValueCount = (root, target) => {
  if (root === null) return 0
  const match = root.val === target ? 1 : 0;
  return match + treeValueCount(root.left, target) + treeValueCount(root.right, target)
}

// DFS Iterative
// n = number of nodes
// Time: O(n)
// Space: O(n)

const treeValueCount = (root, target) => {
  if (root === null) return 0;
  let count = 0;
  let stack = [ root ]
  while (stack.length > 0) {
    const node = stack.pop()
    if (node.val === target) count++
    if (node.right) stack.push(node.right)
    if (node.left) stack.push(node.left)
  }
  return count
};

// BFS Iterative
// n = number of nodes
// Time: O(n^2)
// Space: O(n)

const treeValueCount = (root, target) => {
  if (root === null) return 0;
  let count = 0;
  let queue = [ root ]
  while (queue.length > 0) {
    const node = queue.shift()
    if (node.val === target) count++
    if (node.right) queue.push(node.right)
    if (node.left) queue.push(node.left)
  }
  return count
}
