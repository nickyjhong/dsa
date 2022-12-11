class Solution:
  def romanToInt(self, s: str) -> int:
    symbols = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000
    }

    num = 0
    for i in range(len(s)):
      current = symbols[s[i]]
      if i < len(s) - 1:
        next = symbols[s[i + 1]]
        if next > current:
          num -= current
        else:
          num += current
      else:
        num += current
    return num