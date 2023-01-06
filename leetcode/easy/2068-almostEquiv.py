from collections import Counter

def checkAlmostEquivalent(word1, word2):
  counter1 = Counter(word1)
  counter2 = Counter(word2)

  counter1.subtract(counter2)

  for count in counter1:
    if abs(counter1[count]) > 3:
      return False

  return True