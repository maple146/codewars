function getCount(str) {
  let regex = /[aeiou]/g;
  return str.match(regex).length
}

module.exports = getCount;