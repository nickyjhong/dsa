// Write a function, isPrime, that takes in a number as an argument. 
// The function should return a boolean indicating whether or not the given number is prime.

// A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

// For example, 7 is a prime because it is only divisible by 1 and 7. 
// For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

// You can assume that the input number is a positive integer.

// n = input numbers
// Time: O(sqrt(n)) - better time complexity
// Space: O(1)

const isPrime = (n) => {
  if (n < 2) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true;
}

module.exports = {
  isPrime,
};

// n = input numbers
// Time: O(n) - works but slower time complexity
// Space: O(1)

// const isPrime = (n) => {
//   if (n < 2) {
//     return false
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false
//     }
//   }
//   return true
// };


/* Notes
- Start i at 2 because all numbers are divisible by 1 - not a prime number
- Can use Math.sqrt() to limit the number of iterations to go through (decrease time complexity)
  - Does not have to go through every single number between 2 and the target number!
  - Check factors up to the sqrt(n) only!
*/