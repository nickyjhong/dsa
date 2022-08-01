// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. 
// If the value is not found, return -1

// Time: O(log n)

function search (arr, val) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (arr[middle] < val) {
      min = middle + 1;
    } else if (arr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
}

// Time: O(n)

// function search(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return i;
//     }
//   }
//   return -1;
// }

/* Notes
- Use binary search (divide and conquer)
*/