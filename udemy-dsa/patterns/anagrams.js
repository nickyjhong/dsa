// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another,
// such as cinema, formed from iceman.

// anagram ('', '') // true
// anagram ('aaz', 'zza') // false
// anagram ('anagram', 'nagaram') // true 

// Time: O(n)

function anagrams (str1, str2) {
  // if str1.length doesn't equal str2.length its false
  if (str1.length !== str2.length) return false
  // make object to hold chars
  let count = {}

  // iterate through str1 and add count of each char to object
  for (let char of str1) {
    count[char] ? count[char]++ : count[char] = 1
  }
  // iterate through arr2 and subtract count of each char from object
  for (let char of str2) {
    if (!count[char]) {
      return false
    } else {
      count[char]--
    }
  }
  return true
}

console.log(anagrams('', ''))
console.log(anagrams('aaz', 'zza'))
console.log(anagrams('anagram', 'nagaram'))