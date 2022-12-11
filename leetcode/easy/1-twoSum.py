class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    hash = {}
    for num in range(len(nums)):
      current_element = nums[num]
      if target - current_element in hash:
        return [num, hash[target - current_element]]
      hash[current_element] = num