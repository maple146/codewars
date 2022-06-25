const powersOfTwo = require("./powers-of-two");

test("", () => {
  expect(powersOfTwo(0)).toStrictEqual([1]);
});

test("", () => {
  expect(powersOfTwo(1)).toStrictEqual([1,2]);
});

test("", () => {
  expect(powersOfTwo(4)).toStrictEqual([1,2,4,8,16]);
});