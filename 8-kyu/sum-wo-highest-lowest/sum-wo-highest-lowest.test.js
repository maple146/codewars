const sumArray = require("./sum-wo-highest-lowest");

test("", () => {
  expect(sumArray(null)).toStrictEqual(0);
});

test("", () => {
  expect(sumArray([])).toStrictEqual(0);
});

test("", () => {
  expect(sumArray([3])).toStrictEqual(0);
});

test("", () => {
  expect(sumArray([3, 5])).toStrictEqual(0);
});

test("", () => {
  expect(sumArray([ 6, 2, 1, 8, 10 ])).toStrictEqual(16);
});

test("", () => {
  expect(sumArray([ 0, 1, 6, 10, 10 ])).toStrictEqual(17);
});

test("", () => {
  expect(sumArray([ -6, -20, -1, -10, -12 ])).toStrictEqual(-28);
});

test("", () => {
  expect(sumArray([ -6, 20, -1, 10, -12 ])).toStrictEqual(3);
});