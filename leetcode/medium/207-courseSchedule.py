def canFinish(numCourses, prerequisites):
  # Adjacency list - map each course to an empty prereq list
  preMap = { i: [] for i in range(numCourses) }

  for course, pre in prerequisites:
    preMap[course].append(pre)

  visiting = set()

  def dfs(course):
    # Detect a loop
    if course in visiting:
      return False
    # No prerequisites 
    if preMap[course] == []:
      return True

    visiting.add(course)

    # Run DFS on prerequisites
    for pre in preMap[course]:
      # If returns False
      if not dfs(pre):
        return False
    
    # Course can be taken
    # Remove from visit set because the course can be taken
    visiting.remove(course)
    # If DFS is run again, it will return True immediately 
    preMap[course] = []
    return True

  # Call for each course in number of courses
  for course in range(numCourses):
    if not dfs(course):
      return False

  return True