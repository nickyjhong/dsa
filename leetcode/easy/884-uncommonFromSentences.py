def uncommonFromSentences(s1, s2):
  wordCount = {}

  for word in s1.split():
    wordCount[word] = wordCount.get(word, 0) + 1
  
  for word in s2.split():
    wordCount[word] = wordCount.get(word, 0) + 1

  return [word for word in wordCount if wordCount[word] == 1]