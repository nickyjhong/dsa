def sortByBits(arr):
  # for index, num in enumerate(arr):
  #   arr[index] = (bin(num).count('1'), num)

  # Create a tuple for each number in the arr - (count of number of 1 bits, number)
  arr = [(bin(num).count('1'), num) for num in arr]
  # Sort the array
  arr.sort()
  # Create and return a list of the 1st index in each tuple
  return [i[1] for i in arr]


# List comprehension - create a new list from an old list
  # my_list = [2, 5, 6]
  # my_list = [ item + 1 for item in my_list]
  # print(my_list)
  # [3, 6, 7]

# arr = [1024,512,256,128,64,32,16,8,4,2,1]

# arr after tuple making
# [(1, 1024), (1, 512), (1, 256), (1, 128), (1, 64), (1, 32), (1, 16), (1, 8), (1, 4), (1, 2), (1, 1)]

# arr after sorting
# [(1, 1), (1, 2), (1, 4), (1, 8), (1, 16), (1, 32), (1, 64), (1, 128), (1, 256), (1, 512), (1, 1024)]

# # Answer
# [1,2,4,8,16,32,64,128,256,512,1024]