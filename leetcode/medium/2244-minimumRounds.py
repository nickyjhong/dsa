# from collections import Counter
import math

def minimumRounds(tasks):
  # taskCount = Counter(tasks)
  taskCount = {}
  result = 0

  for task in tasks:
    taskCount[task] = 1 + taskCount.get(task, 0)

  for task in taskCount:
    count = taskCount[task]

    if count == 1:
      return -1

    # if count % 3 == 0:
    #   result += count // 3
    # else:
    #   result += count // 3 + 1

    result += math.ceil(count / 3)

  return result