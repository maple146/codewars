function capitalizeWord(word) {
  let stringArray = Array.from(word)
  let firstLetter = stringArray[0].toUpperCase()
  stringArray[0] = firstLetter
  let arrayToString = stringArray.join('')
  return arrayToString;
}

module.exports = capitalizeWord;