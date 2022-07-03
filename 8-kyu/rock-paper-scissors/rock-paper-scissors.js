function rps(p1, p2) {
  const playersInput = [p1, p2]

  const winCases = [
    ['rock', 'scissors'],
    ['scissors', 'paper'],
    ['paper', 'rock'],
  ]

  const loseCases = [
    ['scissors', 'rock'],
    ['paper', 'scissors'],
    ['rock', 'paper'],
  ]

  const drawCases = [
    ['rock', 'rock'],
    ['scissors', 'scissors'],
    ['paper', 'paper'],
  ]
  
  const winCasesIterator = winCases.values();

  for (const value of winCasesIterator) {
    if(JSON.stringify(value) == JSON.stringify(playersInput)) {
      return 'Player 1 won!'
    }
  }
  
  const loseCasesIterator = loseCases.values();

  for (const value of loseCasesIterator) {
    if(JSON.stringify(value) == JSON.stringify(playersInput)) {
      return 'Player 2 won!'
    }
  }
  
  const drawCasesIterator = drawCases.values();

  for (const value of drawCasesIterator) {
    if(JSON.stringify(value) == JSON.stringify(playersInput)) {
      return 'Draw!'
    }
  }
}

module.exports = rps;
