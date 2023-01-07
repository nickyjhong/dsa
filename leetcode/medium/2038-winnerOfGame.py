def winnerOfGame(colors):
  count_A = 0
  count_B = 0

  for a, b, c in zip(colors, colors[1:], colors[2:]):
    if 'A' == a == b == c:
      count_A += 1
    elif 'B' == a == b == c:
      count_B += 1

  return count_A > count_B