const romanToInt = (s) => {
  const symbols = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  let num = 0;
  let left = 0;

  for (let i = 0; i < s.length; i++) {
    const current = symbols[s[i]]
    const next = symbols[s[i + 1]]
    if (current < next) num -= current
    num += current;
  }
  return num
}