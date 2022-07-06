function compareNumbers(a, b) {
  return a - b;
}

function mergeArrays(arr1, arr2) {
  return [ ...new Set(arr1.concat(arr2).sort(compareNumbers))]
}

module.exports = mergeArrays;