// Sum all the numbers of a given array, except the highest and the lowest element ( by value, not by index! ).
// The highest or lowest element respectively is a single element at each edge, 
// even if there are more than one with the same value.

// Mind the input validation.
// If an empty value ( null, None, Nothing etc. ) is given instead of an array,
// or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  if (array === null || array === undefined || array.length <= 2) return 0

  let modifiedArray = array.sort((a, b) => a - b).slice(0, array.length-1).slice(1)
  return modifiedArray.reduce((previousValue, currentValue) => previousValue+currentValue)
}

module.exports = sumArray;
