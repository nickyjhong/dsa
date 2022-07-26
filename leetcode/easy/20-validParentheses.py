class Solution:
  def isValid(self, s: str) -> bool:
    if len(s) % 2 == 1: return False

    brackets = {
      ')' : '(',
      '}' : '{',
      ']' : '['
    }

    stack = []
        
    for char in s:
      if char in brackets:
        if stack and stack[-1] == brackets[char]:
          stack.pop()
        else:
          return False
      else:
        stack.append(char)

    return len(stack) == 0