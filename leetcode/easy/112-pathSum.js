// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

// A leaf is a node with no children.

// Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
// Output: true

// Time: O(n)
// Space: O(log n)

const hasPathSum = (root, targetSum) => {
  if (root === null) return false;
  if (root.left === null && root.right === null) return targetSum === root.val;
  return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val);
};

const hasPathSum = (root, targetSum) => {
  if (root === null) return false;
  targetSum -= root.val
  if (root.left === null && root.right === null) return targetSum === 0
  return hasPathSum(root.left, targetSum) || hasPathSum(root.right, targetSum)
}