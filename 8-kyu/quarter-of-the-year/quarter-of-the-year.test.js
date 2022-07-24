const quarterOf = require("./quarter-of-the-year");

test("", () => {
  expect(quarterOf(3)).toStrictEqual(1);
});

test("", () => {
  expect(quarterOf(8)).toStrictEqual(3);
});

test("", () => {
  expect(quarterOf(11)).toStrictEqual(4);
});