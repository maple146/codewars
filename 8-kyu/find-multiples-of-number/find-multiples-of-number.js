function findMultiples(integer, limit) {
  let newArr = []
  for (i = 1; i <= limit; i++) {
    if(integer*i <= limit) {
      newArr.push(integer*i)
    }
  }
  
  return newArr
}

module.exports = findMultiples