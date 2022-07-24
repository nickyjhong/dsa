// Write a function, uncompress, that takes in a string as an argument. 
// The input string will be formatted into multiple groups according to the following pattern:

// <number><char>

// for example, '2c' or '3a'.

// The function should return an uncompressed version of the string where each 'char' of a group is repeated 'number' times consecutively. 
// You may assume that the input string is well-formed according to the previously mentioned pattern.

// n = number of groups
// m = max number found in any group
// Time: O(n*m)
// Space: O(n*m)

const uncompress = (str) => {
  // make str of numbers to check if str is number or letter
  const numbers = '0123456789'
  let result = []
  // i = num ; j = chara
  let i = 0;
  let j = 0;
  
  // before the end of the string
  while(j < str.length) {
    // if str[j] is a number, add 1 to the j (index) and check again
    if (numbers.includes(str[j])) {
      j += 1;
    } else {
      // the number starts at str[i] and ends at str[j]
      const num = Number(str.slice(i, j));
      for (let count = 0; count < num; count++) {
        result.push(str[j])
      }
      // add 1 to j to check for the next character
      j += 1;
      // i is the new starting place for the number
      i = j;
    }
  }
  return result.join('');
};

module.exports = {
  uncompress,
};

/* Notes
- Set result to array instead of string to make it truly O(n*m)
*/