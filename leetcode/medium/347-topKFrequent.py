def topKFrequent(nums, k):
  count = {}
  # Bucket sort - make an array for length of nums array
  # Index = count - what goes in the array are the numbers with that frequency count
  freq = [[] for i in range(len(nums) + 1)]

  for num in nums:
    # Frequency = 1 + whatever is stored. If nothing is stored yet as value, default is 0
    count[num] = 1 + count.get(num, 0)
  
  for num, count in count.items():
    freq[count].append(num)

  result = []

  # Range starting at the end of the freq array, until 0th index, decrement by 1
  for i in range(len(freq) - 1, 0, -1):
    for num in freq[i]:
      result.append(num)
      if len(result) == k:
        return result