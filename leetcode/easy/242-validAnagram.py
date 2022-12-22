def isAnagram(s, t):
  if len(s) != len(t):
    return False

  charCount = {}

  for char in s:
    if char in charCount:
      charCount[char] += 1
    else:
      charCount[char] = 1

  for char in t:
    if char in charCount:
      charCount[char] -= 1
    else:
      return False

  for char in s:
    if charCount[char] != 0:
      return False

    return True