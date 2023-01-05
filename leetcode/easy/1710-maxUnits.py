def maximumUnits(boxTypes, truckSize):
  boxTypes.sort(key=lambda x:-x[1])
  # boxTypes.sort(key=lambda x:x[1] reverse=True)
  total_units = 0

  for numboxes, unit in boxTypes:
    # Edge case: truck size/remaining space is smaller than number of boxes available
    if truckSize <= numboxes:
      total_units += truckSize * unit
      break

    total_units += numboxes * unit
    truckSize -= numboxes

  return total_units