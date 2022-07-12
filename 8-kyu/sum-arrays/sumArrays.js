function sumArrays (numbers) {
  if (numbers.length === 0) return 0
  return numbers.reduce(
    (previousValue, currentValue) => previousValue + currentValue
  )
};

module.exports = sumArrays