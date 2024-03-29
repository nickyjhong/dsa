from collections import Counter

def findLeastNumOfUniqueInt(arr, k):
  # sorted sorts a list or other iterable data type
  # items() gets a list of tuples, where each tuple is a key-value pair from the dictionary
  # key=lambda x:x[1] means the sort order will be based on the second element of each tuple (value)
  numCount = sorted(Counter(arr).items(), key=lambda x:x[1])
  removed = 0

  for key, val in numCount:
    if k >= val:
      k -= val
      removed += 1
    else:
      break

  return len(numCount) - removed

####

from collections import Counter

def findLeastNumOfUniqueInt(arr, k):
  count = Counter(arr)

  for ele, freq in count.items():
    count[ele] = max(0, freq - k)
    k -= freq - count[ele]
    if k <= 0:
      break

  return len([ele for ele, freq in count.items() if freq > 0])