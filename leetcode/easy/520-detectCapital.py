def detectCapital(word):
  if len(word) == 1:
    return True

  # Case 1 - all capitals
  if word[0].isupper() and word[1].isupper():
    for i in range(2, len(word)):
      if not word[i].isupper():
        return False
  # Case 2 and 3 - all other letters are capitalized
  else:
    for i in range(1, len(word)):
      if word[i].isupper():
        return False
  
  # At least one case passed
  return True