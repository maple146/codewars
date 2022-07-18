const numberToString = require("./convert-number-to-string");

test("", () => {
  expect(numberToString(67)).toStrictEqual('67');
});

test("", () => {
  expect(numberToString(79585)).toStrictEqual('79585');
});

test("", () => {
  expect(numberToString(79585)).not.toStrictEqual(79585);
});

test("", () => {
  expect(numberToString(1+2)).toStrictEqual('3');
});

test("", () => {
  expect(numberToString(1-2)).toStrictEqual('-1');
});