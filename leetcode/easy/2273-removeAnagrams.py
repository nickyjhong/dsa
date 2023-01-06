def removeAnagrams(words):
  result = []

  # Get the count of each letter for each word
  for word in words:
    count = [0] * 26

    for char in word:
      count[ord(char) - ord('a')] += 1

    # If result is empty, add the first word
    # If the count is NOT equal to a count already found in the result -> result[-1][0] = go backwards through result one by one and check 0th index
    if not result or count != result[-1][0]:
      result.append([count, word])

  # Create and return a list of the 1st index in result
  return [i[1] for i in result]