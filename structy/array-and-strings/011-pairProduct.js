// Write a function, pairProduct, that takes in an array and a target product as arguments. 
// The function should return an array containing a pair of indices whose elements multiply to the given target. 
// The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.
// There is guaranteed to be one such pair whose product is the target.

// pairProduct([3, 2, 5, 4, 1], 8); // -> [1, 3]

// OPTIMIZED
// n = length of array
// Time: O(n)
// Space: O(n)

const pairProduct = (numbers, targetProduct) => {
  let previous = {};
  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    let pair = targetProduct / num;
    if (pair in previous) {
      return [i, previous[pair]]
    } else {
      previous[num] = i
    }
  }
};

// BRUTE FORCE
// n = length of array
// Time: O(n^2) 
// Space: O(1)

const pairProduct = (numbers, targetProduct) => {
  let product = 1;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] * numbers[j] === targetProduct) {
        return [i, j]
      }
    }
  }
};