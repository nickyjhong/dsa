class Codec:
  def encode(self, strs):
    result = ''
    for string in strs:
      # Add the length of the string, delimiter, and string
      result += str(len(string)) + '#' + string
    
    return result

  def decode(self, str):
    result = []
    # First pointer to figure out integer
    i = 0

    while i < len(str):
      # Second pointer to figure out end of the integer
      j = i
      # While j does not point to delimiter / points to integer
      while str[j] != '#':
        j += 1
      length = int(str[i:j])
      # j + 1 is first character of string, j + 1 + length is last character of string
      result.append(str[j + 1 : j + 1 + length])
      # beginning of the next str
      i = j + 1 + length

    return result