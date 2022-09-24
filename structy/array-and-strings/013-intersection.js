// Write a function, intersection, that takes in two arrays, a,b, as arguments. 
// The function should return a new array containing elements that are in both of the two arrays.

// You may assume that each input array does not contain duplicate elements.

// intersection([4,2,1,6], [3,6,9,2,10]) // -> [2,6]

// SET
// n = length of array a, m = length of array b
// Time: O(n+m)
// Space: O(n)

const intersection = (a, b) => {
  const result = [];
  const setA = new Set(a);
  for (let item of b) {
    if (setA.has(item)) {
      result.push(item)
    }
  }
  return result;
};

// const intersection = (a, b) => {
//   const result = [];
//   const items = new Set();
//   for (let item of a) {
//     items.add(item)
//   }

//   for (let ele of b) {
//     if (items.has(ele)) {
//       result.push(ele)
//     }
//   }
//   return result;
// }

// BRUTE FORCE - timeout on last spec
// n = length of array a, m = length of array b
// Time: O(n*m)
// Space: O(min((n, m))) -- will never be bigger than the smallest array

const intersection = (a, b) => {
  let result = []
  for (let i = 0; i < b.length; i++) {
    if (a.includes(b[i])) result.push(b[i])
  }
  return result
};

/* Notes
- SET: Object with unique values
const mySet = new Set();
mySet.add(3)
mySet.add(5)
mySet.add(3)
console.log(mySet) // { 3, 5 }
console.log(mySet.has(3)) // true
*/