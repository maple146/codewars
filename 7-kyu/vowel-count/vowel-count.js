function getCount(str) {
  let regex = /[aeiou]/gi;
  return (str.match(regex)||[]).length
}

module.exports = getCount;