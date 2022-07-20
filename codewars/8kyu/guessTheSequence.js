//Guess the Sequence

// You have read the title: you must guess a sequence. It will have something to do with the number given.

function sequence(num) {
    let result = []
    for (let i = 1; i <= num; i++) {
      result.push(i)
    }
    return result.sort()
  }