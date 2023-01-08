from collections import Counter

def originalDigits(s):
  count = Counter(s)
  uniqueChars = {
    'w': ('two', '2'),
    'u': ('four', '4'),
    'x': ('six', '6'),
    'f': ('five', '5'),
    'z': ('zero', '0'),
    'r': ('three', '3'),
    'g': ('eight',  '8'),
    's': ('seven', '7'),
    'i': ('nine', '9'),
    'n': ('one', '1')
  }
  digits = []

  for char, (word, digit) in uniqueChars.items():
    digit_count = count[char]
    digits.append(digit * digit_count)
    for char in word:
      count[char] -= digit_count
  
  return ''.join(sorted(digits))

#####

from collections import Counter

def originalDigits(s):
  count = Counter(s)

  # building hashmap digit -> its frequency
  out = {}
  # letter "z" is present only in "zero"
  out["0"] = count["z"]
  # letter "w" is present only in "two"
  out["2"] = count["w"]
  # letter "u" is present only in "four"
  out["4"] = count["u"]
  # letter "x" is present only in "six"
  out["6"] = count["x"]
  # letter "g" is present only in "eight"
  out["8"] = count["g"]
  # letter "h" is present only in "three" and "eight"
  out["3"] = count["h"] - out["8"]
  # letter "f" is present only in "five" and "four"
  out["5"] = count["f"] - out["4"]
  # letter "s" is present only in "seven" and "six"
  out["7"] = count["s"] - out["6"]
  # letter "i" is present in "nine", "five", "six", and "eight"
  out["9"] = count["i"] - out["5"] - out["6"] - out["8"]
  # letter "n" is present in "one", "nine", and "seven"
  out["1"] = count["n"] - out["7"] - 2 * out["9"]

  output = [key * out[key] for key in sorted(out.keys())]
  return "".join(output)
