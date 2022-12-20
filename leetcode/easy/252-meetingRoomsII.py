def minMeetingRooms(intervals):
  start = sorted([ i[0] for i in intervals ])
  end = sorted([ i[1] for i in intervals ])

  result = 0
  count = 0

  i = 0
  j = 0

  while i < len(intervals):
    if start[i] < end[j]:
      i += 1
      count += 1
    else:
      j += 1
      count -= 1
    
    result = max(result, count)

  return result