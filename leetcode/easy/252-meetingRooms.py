def canAttendMeetings(intervals):
  # Sort the array first so that the starting time is in ascending order
  intervals.sort()

  # Need to do -1 so that it stays in bounds
  for i in range(len(intervals) - 1):
    # i1 = current meeting, i2 = next meeting
    i1 = intervals[i]
    i2 = intervals[i + 1]

    # If current meeting's end time is greater than next meeting's start time:
    if i1[1] > i2[0]:
      return False

  return True