// Write a function, treeIncludes, that takes in the root of a binary tree and a target value. 
// The function should return a boolean indicating whether or not the value is contained in the tree.

// const a = new Node("a");
// const b = new Node("b");
// const c = new Node("c");
// const d = new Node("d");
// const e = new Node("e");
// const f = new Node("f");

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

// treeIncludes(a, "e"); // -> true

// DFS
// n = number of nodes
// Time: O(n)
// Space: O(n)

const treeIncludes = (root, target) => {
  if (root === null) return false;
  if (root.val === target) return true;
  return treeIncludes(root.left, target) || treeIncludes(root.right, target)
}

// BFS
// n = number of nodes
// Time: O(n)
// Space: O(n)

const treeIncludes = (root, target) => {
  if (root === null) return false;

  let queue = [ root ]
  
  while (queue.length > 0) {
    let node = queue.shift();
    if (node.val === target) return true;
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
  return false;
};