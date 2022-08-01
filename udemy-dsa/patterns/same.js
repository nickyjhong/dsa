// Write a function called same, which accepts two arays. 
// The function should return true if every value in the array has it's corresponding value squared in the second array. 
// The frequency of values must be the same.

// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false
// same([1, 2, 1], [4, 4, 1]) // false (must be same frequency)

// Time: O(n)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freqCount1 = {}
  let freqCount2 = {}
  for (let val of arr1) {
    freqCount1[val] ? freqCount1[val]++ : freqCount1[val] = 1
  }
  for (let val of arr2) {
    freqCount2[val] ? freqCount2[val]++ : freqCount2[val] = 1
  }
  for (let key in freqCount1) {
    // if the squared key isn't in freqCount2, return false
    if (!(key ** 2 in freqCount2)) {
      return false
    }
    // if the squared key is in freqCount2 but the count (value) doesn't match, return false
    if (freqCount2[key ** 2] !== freqCount1[key]) {
      return false
    }
  }
  return true
}

console.log(same([1, 2, 3], [4, 1, 9]))
console.log(same([1, 2, 1], [4, 4, 1]))