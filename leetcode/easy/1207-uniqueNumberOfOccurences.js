// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique, or false otherwise.

// Input: arr = [1,2,2,1,1,3]
// Output: true

// Time: O(n)
// Space: O(n)

const uniqueOccurences = arr => {
  let hash = {}
  let freq = new Set()

  for (let num of arr) {
    if (hash[num] === undefined) {
      hash[num] = 1
    } else {
      hash[num]++
    }
  }
  for (let val in hash) {
    freq.add(hash[val])
  }

  return freq.length === hash.length
}