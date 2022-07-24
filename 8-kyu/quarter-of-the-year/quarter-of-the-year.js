const quarterOf = (month) => {
  let firstQuarter = [1,2,3]
  let secondQuarter = [4,5,6]
  let thirdQuarter = [7,8,9]
  let fourthQuarter = [10,11,12]
  
  let monthIsInFirstQ = firstQuarter.includes(month)
  let monthIsInSecondQ = secondQuarter.includes(month)
  let monthIsInThirdQ = thirdQuarter.includes(month)
  let monthIsInFourthQ = fourthQuarter.includes(month)

  if (monthIsInFirstQ) {
    return 1
  } else if (monthIsInSecondQ) {
    return 2
  } else if (monthIsInThirdQ) {
    return 3
  } else if (monthIsInFourthQ) {
    return 4
  } else {
    return null
  }
}

module.exports = quarterOf;