function isSecondElement(value) {
  return value % 2 === 0
}

function removeEveryOther(arr) {
    return arr.filter((_, index)=> isSecondElement(index))
}

module.exports = removeEveryOther;