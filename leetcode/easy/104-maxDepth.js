// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Time: O(n)
// Space: O(n)

const maxDepth = (root) => {
  // empty tree has a height of 0
  if (root === null) return 0
  const leftDepth = maxDepth(root.left)
  const rightDepth = maxDepth(root.right)
  return 1 + Math.max(leftDepth, rightDepth)
}

/*
- Use recursion so the answer bubbles up from the bottom
- Need to add 1 after each call so that the comparison moves up (or it'll just stay the same) 
*/

// maxDepth([a,b,c,null,null,d,e])

//     a
//   /   \
//  b     c
//       /  \
//      d     e


// b -> leftDepth = 0, rightDepth = 0 + 1 = 1
//     a
//   /   \
//  1     c
//       /  \
//      d     e

// d -> leftDepth = 0, rightDepth = 0 + 1 = 1
//     a
//   /   \
//  1     c
//       /  \
//     1     e

// e -> leftDepth = 0, rightDepth = 0 + 1 = 1
//     a
//   /   \
//  1     c
//       /  \
//     1      1

// c -> leftDepth = 1, rightDepth = 1 + 1 = 2
//     a
//   /   \
//  1     2
//       /  \
//     1      1


// a -> leftDepth = 1, rightDepth = 2 + 1 = 3
//     3
//   /   \
//  1     2
//       /  \
//     1      1
