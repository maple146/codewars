function getCount(str) {
  let vowelsCount = 0;
  let strArray = str.split("");
  for (i = 0; i < strArray.length; i++) {
    if (
      strArray[i] === "a" ||
      strArray[i] === "e" ||
      strArray[i] === "i" ||
      strArray[i] === "o" ||
      strArray[i] === "u"
    ) {
      vowelsCount = vowelsCount + 1;
    }
  }

  return vowelsCount;
}

module.exports = getCount;