from collections import defaultdict

def groupAnagrams(strs):
  # defaultdict does not raise KeyError - provides default value for a key that does not exist
  result = defaultdict(list)

  # transform each string into a character count
  for str in strs:
    count = [0] * 26 # a - z

    for char in str:
      # map 'a' to index 0, 'z' to index 25 -> each index needs to be shifted down 1
      count[ord(char) - ord('a')] += 1

    # count should be a tuple
    result[tuple(count)].append(str) 

  return result.values()