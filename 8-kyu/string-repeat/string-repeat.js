function repeatStr(n, s) {
  let string = "";
  for (i = 0; i < n; i++) {
    string = string.concat(s);
  }
  return string;
}

module.exports = repeatStr;
