// Write a function called sameFrequency. 
// Given two positive integers, find out if the two numbers have the same frequency of digits.

// Time: O(n)

function sameFrequency(num1, num2) {
  let numStr1 = num1.toString()
  let numStr2 = num2.toString()

  let count1 = {}
  let count2 = {}

  for (let num of numStr1) {
    (count1[num] ? count1[num]++ : count1[num] = 1)
  }

  for (let num of numStr2) {
    (count2[num] ? count2[num]++ : count2[num] = 1)
  }
  
  for (let key in count1) {
    if (count1[key] !== count2[key]) {
      return false
    }
  }
  return true
}