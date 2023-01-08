def breakPalindrome(palindrome):
  # If palindrome only has 1 character, return empty string
  if len(palindrome) == 1:
    return ''

  # Check first half of palindrome str
  for i in range(len(palindrome) // 2):
    # Replace the first non 'a' character with 'a'
    if palindrome[i] != 'a':
      # First characters up to but not including i-th character + 'a' (replace i-th character) + character from i + 1 to end of string
      return palindrome[:i] + 'a' + palindrome[i + 1:]

  # If all characters are 'a', replace the last 'a' with 'b'
  return palindrome[:-1] + 'b'