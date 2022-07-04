const opposite = require("./opposite");

test("", () => {
  expect(opposite(1)).toStrictEqual(-1);
});

test("", () => {
  expect(opposite(0)).toStrictEqual(0);
});

test("", () => {
  expect(opposite(4.25)).toStrictEqual(-4.25);
});

test("", () => {
  expect(opposite(3.3333333)).toStrictEqual(-3.3333333);
});

test("", () => {
  expect(opposite(-12525220.3325)).toStrictEqual(12525220.3325);
});

test("", () => {
  expect(opposite(-5)).toStrictEqual(5);
});